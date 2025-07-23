const express = require('express');
const router = express.Router();
const prisma = require('../config/config');

// ADD user 
router.post('/user', async (req, res) => {
    const { fname, lname, preId } = req.body;
    if (!fname || !lname || !preId) {
        return res.status(400).json({ message: "กรอกข้อมูลให้ครบ" });
    }

    try {
        const user = await prisma.user.findFirst({ where: { fname, lname } });        
        if (user) {
            return res.status(400).json({ message: "ชื่อ-นามสกุล ซ้ำ❌" });
        }

        const Adduser = await prisma.user.create({
            data: {
                fname, 
                lname,
                preId: Number(preId)
            }
        });

        res.status(201).json({ data: Adduser, message: "สมัครสมาชิกได้แล้ว 😁" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "เกิดข้อผิดพลาดสัส" });
    }
});

module.exports = router;
