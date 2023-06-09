import { createStyles, Avatar, Text, Group } from "@mantine/core";
import { IconPhoneCall, IconAt } from "@tabler/icons-react";
import "./Profile.scss";

const useStyles = createStyles((theme) => ({
  icon: {
    color:
      theme.colorScheme === "dark"
        ? theme.colors.white[3]
        : theme.colors.gray[5],
  },

  name: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },
}));

interface UserInfo {
  avatar: string;
  name: string;
  title: string;
  phone: string;
  email: string;
}

export default function Profile({
  avatar,
  name,
  title,
  phone,
  email,
}: UserInfo) {
  const { classes } = useStyles();
  return (
    <div className="Profile">
      <Group noWrap className="DataProfile">
        <Avatar src={avatar} size={94} radius="md" />
        <div>
          <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
            {title}
          </Text>

          <Text fz="lg" fw={500} className={classes.name}>
            {name}
          </Text>

          <Group noWrap spacing={10} mt={3}>
            <IconAt stroke={1.5} size="1rem" className={classes.icon} />
            <Text fz="xs" c="dimmed">
              {email}
            </Text>
          </Group>

          <Group noWrap spacing={10} mt={5}>
            <IconPhoneCall stroke={1.5} size="1rem" className={classes.icon} />
            <Text fz="xs" c="dimmed">
              {phone}
            </Text>
          </Group>
        </div>
      </Group>
    </div>
  );
}
