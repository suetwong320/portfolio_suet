const projectsController = (req, res) => {
    const data = {
        title: "Projects"
    }
    res.render("projects", data);
}

module.exports = projectsController;