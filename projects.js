document.addEventListener('DOMContentLoaded', () => {
    fetch('myprojects.json')
        .then(response => response.json())
        .then(data => {
            const projectsContainer = document.getElementById('projectsContainer');
            data.forEach(project => {
                const folder = document.createElement('div');
                folder.classList.add('folder');

                const link = document.createElement('a');
                link.href = `#${project.id}`; 
                link.innerHTML = `<img src="images/folder.png" alt="${project.title}"><p>${project.title}</p>`;
                folder.appendChild(link);
                projectsContainer.appendChild(folder);
                
                link.addEventListener('click', (event) => {
                    event.preventDefault();
                    showPopup(project);
                });
            });
        })
        .catch(error => console.error('Error fetching projects:', error));
});

function showPopup(project) {
    const overlay = document.getElementById(project.id); 

    if (!overlay) {
        console.error(`Overlay with ID ${project.id} not found.`);
        return;
    }

    const imageElement = document.getElementById(`popupImage${project.id.charAt(project.id.length - 1)}`);
    const linkElement = document.getElementById(`popupLink${project.id.charAt(project.id.length - 1)}`);
    const linkGitElement = document.getElementById(`popupLinkGit${project.id.charAt(project.id.length - 1)}`);
    const textElement = document.getElementById(`popupText${project.id.charAt(project.id.length - 1)}`);

    if (imageElement && linkElement && linkGitElement && textElement) {
        setPopupImage(project, imageElement); // Call to set correct image based on screen size
        linkElement.href = project.link; 
        linkGitElement.href = project.linkGit;
        linkElement.textContent = "View Website";
        linkGitElement.textContent = "Link Git";
        textElement.innerHTML = project.description;

        overlay.style.opacity = '1'; 
        overlay.style.visibility = 'visible'; 
    } else {
        console.error("Popup elements not found for project:", project);
    }
}

function setPopupImage(project, imageElement) {
    if (window.innerWidth < 768) {
        imageElement.src = project.imageSmall; // Load smaller image for mobile
    } else {
        imageElement.src = project.image; // Load normal image for larger screens
    }


    window.addEventListener('resize', () => {
        if (window.innerWidth < 768) {
            imageElement.src = project.imageSmall;
        } else {
            imageElement.src = project.image;
        }
    });
}

document.querySelectorAll('.close').forEach(closeButton => {
    closeButton.addEventListener('click', (event) => {
        event.preventDefault();
        const overlay = event.target.closest('.overlay');
        overlay.style.opacity = '0'; 
        overlay.style.visibility = 'hidden'; 
    });
});
