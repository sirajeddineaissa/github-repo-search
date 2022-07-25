<div align="center">

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

</div>

<div align="center">
    <img src="./src/assets/logo.png" alt="logo" height="150px" width="150px">

  <p align="center">
A web-based interface solution that allows users to search GitHub repositories and filter them by username.    <br />
    <br />

    <a href="https://mvst-project.netlify.app">View Demo</a>
    ·
    <a href="https://github.com/sirajeddineaissa/github-repo-search/issues">Report Bug</a>
    ·
    <a href="https://github.com/sirajeddineaissa/github-repo-search/issues">Request Feature</a>

  </p>
</div>

## About The Project

![Showcase Project](/src/assets/readme-images/showcase.jpg)

GitHub Repo Search is a web-based interface solution that allows users to search GitHub repositories and filter them by GitHub usernames. It also allows the user to view some of the data related to each repositories (title, description, stars...) and redirect them to the selected project repository.

### Technologies

- ![React](https://camo.githubusercontent.com/67a01fa7cf337616274f39c070a11638f2e65720e414ef55b8dd3f9c2a803b2a/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f7374796c653d666f722d7468652d6261646765266d6573736167653d526561637426636f6c6f723d323232323232266c6f676f3d5265616374266c6f676f436f6c6f723d363144414642266c6162656c3d)
- ![ChakraUI](https://camo.githubusercontent.com/9be161579f0737f301d45929820470e22ad2af41a92524b150dca40fce3c765d/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f7374796c653d666f722d7468652d6261646765266d6573736167653d4368616b72612b554926636f6c6f723d333139373935266c6f676f3d4368616b72612b5549266c6f676f436f6c6f723d464646464646266c6162656c3d)

## Getting Started

### Prerequisites

Use the Yarn Package Manager

- Install Yarn

```sh
 npm install -g yarn
```

### Installation

1. Clone the repository
   ```sh
   git clone https://github.com/sirajeddineaissa/github-repo-search
   ```
2. Install dependencies
   ```sh
   yarn install
   ```

### Running The App

- In Development Mode

```sh
 yarn start
```

- In Production Mode

```sh
 yarn build && npx serve -s build
```

### Running Tests

```sh
 yarn test
```

### Running Storybook

```sh
 yarn storybook
```

## Usage

#### Homepage

![Homepage](/src/assets/readme-images/usage-1.jpg)
<br />

#### Search Users

![Search Users](/src/assets/readme-images/usage-2.jpg)
<br />

#### Search User Repositories

![Search Repositories](/src/assets/readme-images/usage-3.jpg)
<br />

#### View Repository Data

![View Repositories via Modal](/src/assets/readme-images/usage-4.jpg)
<br />

#### Switch Between Light/Dark Themes

![Enable Dark Mode](/src/assets/readme-images/dark-mode.jpg)

## Roadmap

- [x] Added Light/Dark Mode support
- [x] Added GitHub user search feature
- [x] Added GitHub repository search and filtering feature
- [ ] Make it possible to see similar repositories to the searched repository

## Contribute

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/feature-name`)
3. Commit your Changes (`git commit -m 'commit text here'`)
4. Push to the Branch (`git push origin feature/feature-name`)
5. Open a Pull Request

Make sure you give this project a ⭐.

## License

Distributed under the MIT License. Check `LICENSE` for more information.

## Feedback About This Exercise

I enjoyed using ChakraUI's stunning visual components to build the front-end. I also learned a lot about TypeScript and how its type-safe capability ensures a smooth and clean coding environment. Besides, It's always good to keep a clean good-qualiy codebase. Moreover, I enjoyed playing with Storybook and setting it up to visualize various components within its dashboard. This project was definitely challenging especially when it comes to debugging TypeScript.

[contributors-shield]: https://img.shields.io/github/contributors/sirajeddineaissa/github-repo-search?style=for-the-badge
[contributors-url]: https://github.com/sirajeddineaissa/github-repo-search/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/sirajeddineaissa/github-repo-search?style=for-the-badge
[forks-url]: https://github.com/sirajeddineaissa/github-repo-search/network/members
[stars-shield]: https://img.shields.io/github/stars/sirajeddineaissa/github-repo-search?style=for-the-badge
[stars-url]: https://github.com/sirajeddineaissa/github-repo-search/stargazers
[issues-shield]: https://img.shields.io/github/issues/sirajeddineaissa/github-repo-search?style=for-the-badge
[issues-url]: https://github.com/sirajeddineaissa/github-repo-search/issues
[license-shield]: https://img.shields.io/github/license/sirajeddineaissa/github-repo-search?style=for-the-badge
[license-url]: https://github.com/sirajeddineaissa/github-repo-search/blob/main/LICENSE
