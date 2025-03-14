function goToStartPage() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Fonction pour ouvrir la fenêtre modale
function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

// Fonction pour fermer la fenêtre modale
function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Fermer la fenêtre modale si l'utilisateur clique en dehors de la fenêtre modale
window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
}