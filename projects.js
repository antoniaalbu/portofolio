document.addEventListener('DOMContentLoaded', () => {
    console.log("Document loaded.");

    fetch('myprojects.json')
        .then(response => response.json())
        .then(data => {
            console.log("Projects fetched:", data);

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
                    console.log(`📂 Folder clicked: ${project.title} (ID: ${project.id})`);
                    showPopup(project);
                });
            });
        })
        .catch(error => console.error('❌ Error fetching projects:', error));
});

function showPopup(project) {
    console.log("🔍 Showing popup for:", project);

    const overlay = document.getElementById(project.id); 
    if (!overlay) {
        console.error(`❗ Overlay with ID "${project.id}" not found.`);
        return;
    }

    const index = project.id.replace("image", "");
    const imageElement = document.getElementById(`popupImage${index}`);
    const linkElement = document.getElementById(`popupLink${index}`);
    const linkGitElement = document.getElementById(`popupLinkGit${index}`);
    const textElement = document.getElementById(`popupText${index}`);

    if (imageElement && linkElement && linkGitElement && textElement) {
        setPopupImage(project, imageElement); 
        linkElement.href = project.link; 
        linkGitElement.href = project.linkGit;
        linkElement.textContent = "View Website";
        linkGitElement.textContent = "Link Git";
        textElement.innerHTML = project.description;

        overlay.style.opacity = '1'; 
        overlay.style.visibility = 'visible'; 
        console.log(`✅ Popup shown for project: ${project.title}`);
    } else {
        console.error("❌ Missing popup elements for project:", project);
    }
}

function setPopupImage(project, imageElement) {
    const updateImage = () => {
        if (window.innerWidth < 768) {
            imageElement.src = project.imageSmall;
            console.log(`📱 Loaded small image: ${project.imageSmall}`);
        } else {
            imageElement.src = project.image;
            console.log(`🖥️ Loaded large image: ${project.image}`);
        }
    };

    updateImage(); // Initial load
    window.addEventListener('resize', updateImage); // Update on resize
}

document.querySelectorAll('.close').forEach(closeButton => {
    closeButton.addEventListener('click', (event) => {
        event.preventDefault();
        const overlay = event.target.closest('.overlay');
        if (overlay) {
            overlay.style.opacity = '0'; 
            overlay.style.visibility = 'hidden'; 
            console.log(`❎ Closed popup: ${overlay.id}`);
        }
    });
});
