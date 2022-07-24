import { ComponentStory, ComponentMeta } from "@storybook/react";

import SearchRepoBar from "./SearchRepoBar";

export default {
  title: "UI Components/Repositories Search Bar",
  component: SearchRepoBar
} as ComponentMeta<typeof SearchRepoBar>;

const Template: ComponentStory<typeof SearchRepoBar> = (args) => (
  <SearchRepoBar {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
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

