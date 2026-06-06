# Seismo Links

[![Deploy](https://github.com/seismo-learn/links/actions/workflows/deploy.yml/badge.svg)](https://github.com/seismo-learn/links/actions/workflows/deploy.yml)
[![License: CC BY-NC 4.0](https://img.shields.io/badge/License-CC%20BY--NC%204.0-blue.svg)](https://creativecommons.org/licenses/by-nc/4.0/deed.en)

This repository contains the source code for the [Seismo Links](https://seismo-learn.org/links/)
site, which collects useful links for Geophysics and Seismology research.

## Build the site locally

The site is themed by the [Bootstrap](https://getbootstrap.com/) framework and
beautiful icons from [Font Awesome](https://fontawesome.com/), and powered by
the fastest static site generator [Hugo](https://gohugo.io/).

To build it locally, you need to follow the steps below:

1.  [Install Hugo](https://gohugo.io/getting-started/installing/)

2.  Clone the repository

    ```
    # Clone the repository and then switch to the directory
    $ git clone https://github.com/seismo-learn/links.git
    $ cd links
    ```

3.  Build the website

	Run the following command, then you can view the site by visiting
    http://localhost:1313/links/ in your local web browser.

    ```
    $ make serve
    ```

## Contributing

Everyone is welcome to contribute to this site. Contributions include, but are not limited to:

- Add more useful links
- Report/Fix broken links
- Improve the web design
- Any brilliant ideas

For any contributions, please open an [issue](https://github.com/seismo-learn/links/issues)
or submit a [Pull Request](https://github.com/seismo-learn/links/pulls).
You could also refer to the [contributing guides](https://seismo-learn.org/contributing/) (in Chinese)
if you are unfamiliar with git, GitHub, Markdown and so on.


## License

This material uses [Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)](https://creativecommons.org/licenses/by-nc/4.0/deed.en).
You are free to share and adapt the material as long as you follow the following
license terms:

- Attribution: You must give appropriate credit, provide a link to the license, and indicate if changes were made.
- NonCommercial: You may not use the material for commercial purposes.
