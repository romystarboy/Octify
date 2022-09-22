import router from "./auth";


router.get("/login", async (req, res) => {

    res.render("login");
});