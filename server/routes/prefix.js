const express = require('express')
const router = express.Router();
const prisma = require('../config/config')

// เพิ่มคำนำหน้า
router.post('/prefix', async (req , res) => {

    const { text } = req.body
    if(!text) {
        return res.status(401).json({message: "plase require คำนำหน้า"})
    }

    try {
        const prefix = await prisma.prefix.findFirst({ where: { text}})
        if(prefix) {
            return res.status(401).json({ message: "คำนำหน้าซํ้า"})
        }

        const createPrefix = await prisma.prefix.create({
            data: {
                text
            }
        })
        res.status(200).json({ data: createPrefix})
    } catch(err) {
        res.status(500).json({ message: "server error : เพิ่มคำนำหน้า"})
        console.log(err)
    }
})

// แก้ไขคำนำหน้า
router.put('/prefix', async (req , res) => {
    const { id, text } = req.body

    try {
        const [prefix, checkPrefix] = await Promise.all([
            prisma.prefix.findFirst({ where: { text } }),
            prisma.prefix.findFirst({ where: { id: Number(id) } })
        ]);

        if (prefix) {
            return res.status(401).json({ message: "คำนำหน้าซ้ำ" });
        }

        if (!checkPrefix) {
           return res.status(401).json({ message: `ไม่มีไอดี: ${id}` });
        }

        const updatePrefix = await prisma.prefix.update({
            where: { id: Number(id) },
            data: { text }
        })
        res.status(200).json({ data: updatePrefix})
    } catch(err) {
        res.status(500).json({ message: "server error : แก้ไขคำนำหน้า"})
        console.log(err)
    }
})

// แสดงคำนำหน้าทั้งหมด
router.get('/prefix', async (req , res) => {
    try {
        const prefix = await prisma.prefix.findMany({
            select: {
                id: true,
                text: true
            }
        })

        res.status(200).json({ data: prefix})
    } catch(err) {
        res.status(500).json({ message: "server error: แสดงคำนำหน้า"})
        console.log(err)
    }
})

// ลบคำนำหน้า
router.delete('/prefix', async (req ,res) => {
    const { id } = req.body;
    try {
        const checkPrefix = await prisma.prefix.findFirst({
            where: { id: Number(id) }
        })

        if(!checkPrefix) {
           return res.status(401).json({ message: `ไม่มีไอดี: ${id}` });
        }
        const prefix = await prisma.prefix.delete({
            where: {
                id: Number(id)
            }
        })

        res.status(200).json({ message: prefix})
    } catch(err) {
        res.status(500).json({ message: "sserver error: ลบคำนำหน้า"})
        console.log(err)
    }
})

module.exports = router;