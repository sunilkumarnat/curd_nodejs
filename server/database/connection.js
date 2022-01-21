const mongoose = require('mongoose');


const connctDB = async() => {
    try {

        // mongo db connection string
        const con = await mongoose.connect(process.env.MONGODB_URL,
            async(err) => {
                if (err) throw err;
                console.log("MongoDB Connected  !")
            }
        )


        // mongo db connection string
        // const con = await mongoose.connect(process.env.MONGODB_URL, {
        //     useNewUrlParser: true,
        //     useUnifiedTopology: true,
        //     useFindAndModify: false,
        //     useCreateIndex: true
        // })

        console.log(`MongoDB Connected : ${con.connection.host}`);

    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

module.exports = connctDB;