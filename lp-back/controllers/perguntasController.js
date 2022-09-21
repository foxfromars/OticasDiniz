const Perguntas = require("../models/perguntas");

exports.getAll = async (req, res) => {
    try {
        const perguntas = await Perguntas.findById(req.query.id);

        res.json(perguntas);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
};

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({ message: "algo esta vazio!" });
        return;
    }

    //new clube

    const perguntas = new Perguntas({
        nome: req.body.nome,
        email: req.body.email,
        feeling: req.body.feeling,
        feeling: req.body.feeling,
        symptoms: req.body.symptoms,
        pression: req.body.pression,
        medicine: req.body.medicine,
        feelingToday: req.body.feelingToday,
        vision: req.body.vision,
        glass: req.body.glass,
        nightVision: req.body.nightVision,
        testVision: req.body.testVision,
        testDigital: req.body.testDigital,
        farVision: req.body.farVision,
        birthDay: req.body.birthDay,
        farVision2: req.body.farVision2,
        nearVision: req.body.nearVision,
        nearVision2: req.body.nearVision2,
        confort: req.body.confort,
        doze: req.body.doze,
        oito: req.body.oito,
        quinze: req.body.quinze,
        seis: req.body.seis,
        treze: req.body.treze,
        doze2: req.body.doze2,
        seis2: req.body.seis2,
        treze2: req.body.treze2,
        quatrodois2: req.body.quatrodois2,
        sysmptoms2: req.body.sysmptoms2,
        sysmptoms3: req.body.sysmptoms3,
        sysmptoms4: req.body.sysmptoms4,
        sysmptoms5: req.body.sysmptoms5,
        phone: req.body.phone,
        message: req.body.message,
    })

    perguntas
        .save(perguntas)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "aconteceu algum error na criação"
            });
        });

}

