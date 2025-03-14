// Fonction pour inclure du HTML
async function includeHTML(id, url) {
    const element = document.getElementById(id);
    try {
        const response = await fetch(url);
        if (response.ok) {
            element.innerHTML = await response.text();
        } else {
            console.error(`Erreur lors du chargement de ${url}: ${response.status}`);
        }
    } catch (error) {
        console.error(`Erreur réseau : ${error}`);
    }
}

// Inclure les pages
includeHTML('navBarModul', 'assets/html/navBar.html');
includeHTML('footerModul', 'assets/html/footer.html');
includeHTML('presentationModul', 'assets/html/presentation.html');
includeHTML('aproposModul', 'assets/html/propos.html')
includeHTML('experienceModul', 'assets/html/experiences.html');
includeHTML('competencesModul', 'assets/html/competences.html');