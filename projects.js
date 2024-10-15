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

    console.log("Project data:", project);
    console.log("Overlay ID:", project.id);
    console.log("Image Element:", imageElement);
    console.log("Link Element:", linkElement);
    console.log("Text Element:", textElement);
    
    if (imageElement && linkElement && linkGitElement && textElement) {
        imageElement.src = project.image;
        linkElement.href = project.link; 
        linkGitElement.href = project.linkGit;
        linkElement.textContent = "View Website";
        linkGitElement.textContent = "Link Git"
        textElement.innerHTML = project.description;

        overlay.style.opacity = '1'; 
        overlay.style.visibility = 'visible'; 
    } else {
        console.error("Popup elements not found for project:", project);
    }
}


document.querySelectorAll('.close').forEach(closeButton => {
    closeButton.addEventListener('click', (event) => {
        event.preventDefault();
        const overlay = event.target.closest('.overlay');
        overlay.style.opacity = '0'; 
        overlay.style.visibility = 'hidden'; 
    });
});
