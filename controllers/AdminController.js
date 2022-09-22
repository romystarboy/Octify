import asyncHandler from 'express-async-handler';

export const getAdminHomePage = asyncHandler(async (req, res) => {

    res.render("admin");
})

export const getGererDoc = asyncHandler(async (req, res) => {

    res.render("page/examples/icons");
})

export const getGererUsager = asyncHandler(async (req, res) => {

    res.render("page/examples/icons");
})