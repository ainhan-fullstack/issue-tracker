import { Box, Card, Flex } from "@radix-ui/themes";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const IssueDetailedPageLoading = () => {
  return (
    <Box className="max-w-xl">
      <Skeleton />
      <Flex gap="5" my="2" mt="4">
        <Skeleton width="5rem" />
        <Skeleton width="8rem" />
      </Flex>
      <Card className="prose">
        <Skeleton count={3} />
      </Card>
    </Box>
  );
};

export default IssueDetailedPageLoading;
