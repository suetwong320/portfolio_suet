const servicesController = (req, res) => {
    const data = {
        title: "Services"
    }
    res.render("services", data);
}

module.exports = servicesController;