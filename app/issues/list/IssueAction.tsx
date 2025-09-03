import { Button, Flex, Link } from "@radix-ui/themes";
import IssueFilter from "./IssueFilter";

const IssueAction = () => {
  return (
    <Flex mb="5" justify="between">
      <IssueFilter />
      <Button>
        <Link href="/issues/new">New Issue</Link>
      </Button>
    </Flex>
  );
};

export default IssueAction;
