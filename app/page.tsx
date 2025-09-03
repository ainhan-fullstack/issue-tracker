import { Box, Button, Card, Flex, Grid, Heading, Text } from "@radix-ui/themes";
import Link from "next/link";
import {
  CheckCircledIcon,
  MixerHorizontalIcon,
  PersonIcon,
} from "@radix-ui/react-icons";

export default function Home() {
  return (
    <Box>
      <Box className="rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-600 text-white p-10 shadow-lg">
        <Heading size="8" className="tracking-tight">
          Issue Tracker
        </Heading>
        <Text size="3" className="opacity-90 mt-2 block">
          Track, prioritize, and resolve issues with a clean, fast workflow.
        </Text>
        <Flex gap="3" mt="5" wrap="wrap">
          <Button size="3" asChild>
            <Link href="/issues/new">Create Issue</Link>
          </Button>
          <Button size="3" variant="soft" color="gray" asChild>
            <Link href="/issues/list">View Issues</Link>
          </Button>
        </Flex>
      </Box>

      <Grid columns={{ initial: "1", sm: "3" }} gap="4" mt="6">
        <Card className="hover:shadow-md transition-shadow">
          <Flex align="start" gap="3">
            <PersonIcon width={22} height={22} />
            <Box>
              <Heading size="3">Assign owners</Heading>
              <Text as="p" color="gray" className="mt-1">
                Keep responsibility clear by assigning issues to team members.
              </Text>
            </Box>
          </Flex>
        </Card>

        <Card className="hover:shadow-md transition-shadow">
          <Flex align="start" gap="3">
            <MixerHorizontalIcon width={22} height={22} />
            <Box>
              <Heading size="3">Prioritize work</Heading>
              <Text as="p" color="gray" className="mt-1">
                Filter by status and focus on what matters right now.
              </Text>
            </Box>
          </Flex>
        </Card>

        <Card className="hover:shadow-md transition-shadow">
          <Flex align="start" gap="3">
            <CheckCircledIcon width={22} height={22} />
            <Box>
              <Heading size="3">Ship faster</Heading>
              <Text as="p" color="gray" className="mt-1">
                Simple flows help your team resolve issues quickly and reliably.
              </Text>
            </Box>
          </Flex>
        </Card>
      </Grid>
    </Box>
  );
}
