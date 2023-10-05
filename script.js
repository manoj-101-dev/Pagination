const apiUrl = 'https://gist.githubusercontent.com/rvsp/add40254aa126f045837fa5b51f47f1f/raw/4d724bfabf4cce7379a386e23bef6576ab99a2f9/pagination.json';
    const itemsPerPage = 10;
    let currentPage = 1;
    let data = [];

    async function fetchData() {
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const jsonData = await response.json();
            data = jsonData;
            updateDataAndPagination();
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    function updateDataAndPagination() {
        const dataTable = document.getElementById('data-body');
        dataTable.innerHTML = '';

        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const currentPageData = data.slice(startIndex, endIndex);

        currentPageData.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.id}</td>
                <td>${item.name}</td>
                <td>${item.email}</td>
            `;
            dataTable.appendChild(row);
        });

        updatePagination();
    }

    function updatePagination() {
        const totalPages = Math.ceil(data.length / itemsPerPage);
        const pagination = document.getElementById('pagination');
        pagination.innerHTML = '';

        const firstButton = createPageButton('First', 1);
        pagination.appendChild(firstButton);

        if (currentPage > 1) {
            const previousButton = createPageButton('Previous', currentPage - 1);
            pagination.appendChild(previousButton);
        } else {
            const previousButton = createDisabledPageButton('Previous');
            pagination.appendChild(previousButton);
        }

        for (let i = 1; i <= totalPages; i++) {
            const pageButton = createPageButton(i, i);
            pagination.appendChild(pageButton);
        }

        if (currentPage < totalPages) {
            const nextButton = createPageButton('Next', currentPage + 1);
            pagination.appendChild(nextButton);
        } else {
            const nextButton = createDisabledPageButton('Next');
            pagination.appendChild(nextButton);
        }

        const lastButton = createPageButton('Last', totalPages);
        pagination.appendChild(lastButton);
    }

    function createPageButton(text, page) {
        const pageButton = document.createElement('li');
        const pageLink = document.createElement('a');
        pageLink.href = '#';
        pageLink.textContent = text;
        pageButton.appendChild(pageLink);

        pageButton.addEventListener('click', () => {
            currentPage = page;
            updateDataAndPagination();
        });

        return pageButton;
    }

    function createDisabledPageButton(text) {
        const pageButton = document.createElement('li');
        pageButton.textContent = text;
        pageButton.classList.add('disabled');

        return pageButton;
    }

    fetchData();