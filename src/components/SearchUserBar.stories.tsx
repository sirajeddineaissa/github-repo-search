import { ComponentStory, ComponentMeta } from "@storybook/react";

import SearchUserBar from "./SearchUserBar";

export default {
  title: "UI Components/GitHub User Search Bar",
  component: SearchUserBar
} as ComponentMeta<typeof SearchUserBar>;

const Template: ComponentStory<typeof SearchUserBar> = (args) => (
  <SearchUserBar {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  loading: false,
  repos: [
    {
      name: "Name",
      owner: {
        avatar_url: "",
        login: "username"
      },
      description: "GitHub Repository Description",
      stargazers_count: "0",
      forks_count: "0",
      watchers_count: "0",
      html_url: "GitHub Repository URL",
      language: "TypeScript"
    }
  ],
  size: "md"
};

export const Secondary = Template.bind({});

Secondary.args = {
  loading: true,
  repos: [
    {
      name: "Name",
      owner: {
        avatar_url: "",
        login: "username"
      },
      description: "GitHub Repository Description",
      stargazers_count: "0",
      forks_count: "0",
      watchers_count: "0",
      html_url: "GitHub Repository URL",
      language: "TypeScript"
    }
  ],
  size: "md"
};