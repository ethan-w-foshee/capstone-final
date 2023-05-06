const express = require("express");
const mysql = require('mysql2')
const pool = require('../connections/connection')
const { handleSQLError } = require('../connections/error')

const list = (req, res) => {
    // SELECT ALL USERS
    pool.query("SELECT * FROM users", (err, rows) => {
        if (err) return handleSQLError(res, err)
        return res.json(rows);
    })
}


module.exports = list