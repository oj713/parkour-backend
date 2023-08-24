import { resetRangers } from "./users/rangers/rangers-controller.js"
import { resetHikers } from "./users/hikers/hikers-controller.js"
import { resetParks } from "./users/parks/parks-controller.js"
import { resetPosts } from "./posts/posts-controller.js"

const ResetController = (app) => {
    app.get("/api/reset", resetData)
}

const resetData = async (req, res) => {
    const statuses = await Promise.all([
        resetRangers(req, res), 
        resetHikers(req, res), 
        resetParks(req, res), 
        resetPosts(req, res)])

    const allOK = statuses.every(status => status === 200)
    allOK ? res.sendStatus(200) : res.sendStatus(500)
}

export default ResetController