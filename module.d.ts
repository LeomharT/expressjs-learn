declare namespace NodeJS {
	interface ProcessEnv {
		PORT: string;
		JWT_SECRET: string;
		DB_NAME: string;
		DB_HOST: string;
		DB_USER: string;
		DB_PASSWORD: string;
	}
}
