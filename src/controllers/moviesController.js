const db = require('../database/models')
const path = require('path')

module.exports = {
    list: (req,res) => {
        db.Movies.findAll({
            include: [{
                all:true
            }]
        })
        .then(peliculas => {
            res.render('moviesList',{movies:peliculas})
        })
        .catch(error => res.send(error))
    },
    detail: (req,res) => {
        db.Movies.findOne({
            where: {id:req.params.id},
            include: [{
                all:true
            }]
        })
        .then(pelicula => {
            res.render('moviesDetail',{movie:pelicula})
        })
        .catch(error => res.send(error))
    },
    new: (req,res) => {
        db.Movies.findAll({
            order: [['release_date','ASC']]
        },{
            include: [{
                all:true
            }]
        })
        .then(peliculas => {
            res.render('newestMovies',{movies:peliculas})
        })
        .catch(error => res.send(error))
    },
    recomended: (req,res) => {
        db.Movies.findAll({
            order:[['rating','DESC']],
            limit:5
        },{
            include: [{
                all:true
            }]            
        })
        .then(peliculas => {
            res.render('recommendedMovies',{movies:peliculas})
        })
        .catch(error => res.send(error))
    }
}