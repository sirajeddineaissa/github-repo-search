import { ComponentStory, ComponentMeta } from "@storybook/react";

import RepoCard from "./RepoCard";

export default {
  title: "UI Components/Repository Card",
  component: RepoCard
} as ComponentMeta<typeof RepoCard>;

const Template: ComponentStory<typeof RepoCard> = (args) => (
  <RepoCard {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  avatar: "",
  name: "Name",
  username: "username",
  description: "GitHub Repository Description",
  URL: "GitHub Repository URL",
  language: "TypeScript",
  stars: 0,
  forks: 0,
  watchers: 0
};
