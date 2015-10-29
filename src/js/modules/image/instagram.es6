const utils = require('../utils.es6');

let Base = require('../base.es6');

class Instagram extends Base{
	constructor(input,options, embeds){
		super(input, options, embeds);
		this.regex = /instagram.com\/p\/[a-zA-Z0-9]+/gi;
	}

	template(match){
		let dimensions = this.dimensions();
		let template =
		`<div class="ejs-embed">
			<iframe src="${utils.toUrl(match)}/embed/" width="${dimensions.width}" height="${dimensions.height}"></iframe>
		</div>`;
		return template;
	}

}

module.exports = Instagram;
