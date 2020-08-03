const generatePage = function(employeeList) {
return `<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>My Team</title>
	<link rel="stylesheet" href="./style.css" />
</head>
<body>
	<header>
		<h1>My Team</h1>
	</header>
	<section>
		${employeeList.map(employee => employee.printCard()).join("\n\t\t")}
	</section>
</body>
</html>`
};

module.exports = generatePage;