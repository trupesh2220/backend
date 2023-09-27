import express from 'express'
import { verifyToken } from '../middleware/auth'
import { getFeedPosts, getUserPosts, likePost } from '../controllers/users'
const router = express.Router()

router.get("/",verifyToken,getFeedPosts)
router.get("/:id/friends",verifyToken,getUserFriends)
router.patch("/:id/friendId",verifyToken,addRemoveFriend)

export default router