# JavaScript Pagination from API Data

This code demonstrates a JavaScript implementation of pagination using data fetched from an external API.

## Description

The provided code fetches data from a remote API (`apiUrl`) and dynamically displays paginated data on an HTML table. It supports pagination functionality allowing users to navigate through different pages of data.

## Code Functionality

1. Fetches data from the specified API URL.
2. Populates an HTML table with paginated data based on the fetched content.
3. Renders pagination controls (First, Previous, Page numbers, Next, Last) based on the retrieved data.
4. Clicking on pagination buttons updates the displayed content accordingly.

## Usage

1. Set `apiUrl` to the URL containing the data to be paginated.
2. Ensure your HTML file contains elements with IDs `data-body` for the table body and `pagination` for pagination controls.

## How it Works

- `fetchData()`: Fetches data from the API and updates the table and pagination.
- `updateDataAndPagination()`: Updates the table with paginated data.
- `updatePagination()`: Updates the pagination controls based on the fetched data length and current page.
- Functions to create pagination buttons (`createPageButton()` and `createDisabledPageButton()`).
- Clicking on pagination buttons triggers the display of respective page data.

## Site


To view the live site of the app click the beolw link.

- [@Live-site](https://manoj-101-dev.github.io/Task15-2/#)




