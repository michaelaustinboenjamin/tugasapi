let herotemplate = Handlebars.compile(document.getElementById("hero").innerHTML);
async function fetchheroinfo() {
    const response = await fetch('https://api.dazelpro.com/mobile-legends/hero');
    const data = await response.json();
    console.log(data);
    let heroes = data.hero;
    const heroappend = []
    heroes.forEach(hero => {
        const name = hero.hero_name;
        const id=hero.hero_id
        heroappend.push(
            {
                id:id,
                name: name,
                role: hero.hero_role,
                apilink:`https://api.dazelpro.com/mobile-legends/hero/${id}`
            }
        );
    });
    return { hero: heroappend };
}
function renderHero(herolist) {
    const container = document.getElementById('hero-list');
    const html = herotemplate(herolist);
    container.innerHTML = html;
}
async function loadhero() {
    const herodata = await fetchheroinfo();
    renderHero(herodata);
}
loadhero();