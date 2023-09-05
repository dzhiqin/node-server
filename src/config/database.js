module.exports = {
	development: {
		username: "postgres",
		password: "postgres",
		database: "demo_development",
		host: "127.0.0.1",
		dialect: "postgres"
	},
	test: {
		username: "postgres",
		password: "postgres",
		database: "database_test",
		host: "127.0.0.1",
		dialect: "postgres"
	},
	production: {
		username: "postgres",
		password: "postgres",
		database: "postgres",
		host: "121.37.7.190",
		dialect: "postgres"
	}
}