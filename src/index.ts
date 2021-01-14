import express from 'express';
import { PORT } from './config/constants';
import { exampleRouter } from './routes';

class Server {
    public app: express.Application;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }
    private routes(): void {
        this.app.use("/example", exampleRouter)
    }
    private config(): void {
        this.app.use(express.json());
    }

    public start(): void {
        this.app.listen(PORT, () => {
            console.log(`
    ▄▄▄▄▄▄▄ ▄▄▄▄▄▄▄ ▄▄▄▄▄▄   ▄▄   ▄▄ ▄▄▄▄▄▄▄ ▄▄▄▄▄▄         ▄▄▄ ▄▄▄▄▄▄▄       ▄▄   ▄▄ ▄▄▄▄▄▄▄    ▄▄ 
    █       █       █   ▄  █ █  █ █  █       █   ▄  █       █   █       █     █  █ █  █       █  █  █
    █  ▄▄▄▄▄█    ▄▄▄█  █ █ █ █  █▄█  █    ▄▄▄█  █ █ █       █   █  ▄▄▄▄▄█     █  █ █  █    ▄  █  █  █
    █ █▄▄▄▄▄█   █▄▄▄█   █▄▄█▄█       █   █▄▄▄█   █▄▄█▄      █   █ █▄▄▄▄▄      █  █▄█  █   █▄█ █  █  █
    █▄▄▄▄▄  █    ▄▄▄█    ▄▄  █       █    ▄▄▄█    ▄▄  █     █   █▄▄▄▄▄  █     █       █    ▄▄▄█  █▄▄█
     ▄▄▄▄▄█ █   █▄▄▄█   █  █ ██     ██   █▄▄▄█   █  █ █     █   █▄▄▄▄▄█ █     █       █   █       ▄▄ 
    █▄▄▄▄▄▄▄█▄▄▄▄▄▄▄█▄▄▄█  █▄█ █▄▄▄█ █▄▄▄▄▄▄▄█▄▄▄█  █▄█     █▄▄▄█▄▄▄▄▄▄▄█     █▄▄▄▄▄▄▄█▄▄▄█      █▄▄█`);
            console.log(``);
            console.log(`   your url is: "http://localhost":${PORT}`);
        });
    }
}

const server = new Server();

server.start();
