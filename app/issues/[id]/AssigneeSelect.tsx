"use client";

import { Issue, User } from "@/app/generated/prisma";
import { Select } from "@radix-ui/themes";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Skeleton from "react-loading-skeleton";

const AssigneeSelect = ({ issue }: { issue: Issue }) => {
  const {
    data: users,
    error,
    isLoading,
  } = useQuery<User[]>({
    queryKey: ["users"],
    queryFn: () => axios.get("/api/users").then((res) => res.data),
    staleTime: 60 * 1000, // 60s
    retry: 3,
  });

  if (isLoading) return <Skeleton />;

  if (error) return null;
  // const [users, setUsers] = useState<User[]>([]);

  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     const { data } = await axios.get<User[]>("/api/users");
  //     setUsers(data);
  //   };

  //   fetchUsers();
  // }, []);
  return (
    <>
      <Select.Root
        defaultValue={issue.assignedToUserId || "unassigned"}
        onValueChange={async (userId) => {
          try {
            await axios.patch("/api/issues/" + issue.id, {
              assignedToUserId: userId === "unassigned" ? null : userId,
            });
          } catch (error) {
            toast.error("Changes could not be saved.");
          }
        }}
      >
        <Select.Trigger placeholder="Assign..."></Select.Trigger>
        <Select.Content>
          <Select.Group>
            <Select.Label>Suggestions</Select.Label>
            <Select.Item value="unassigned">Unassigned</Select.Item>
            {users?.map((user) => (
              <Select.Item key={user.id} value={user.id}>
                {user.name}
              </Select.Item>
            ))}
          </Select.Group>
        </Select.Content>
      </Select.Root>
      <Toaster />
    </>
  );
};

export default AssigneeSelect;
