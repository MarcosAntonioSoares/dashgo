import { Flex, Text, Box, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Marcos Soares</Text>
          <Text color="gray.300" fontSize="small">
            marcosas.soares2@gmail.com
          </Text>
        </Box>
      )}

      <Avatar size="md" name="Marcos Soares" src="https://github.com/marcosantoniosoares.png" />
    </Flex>
  );
}