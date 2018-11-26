
var psd = "kkkkk";

var dico = ['a', 'b', 'c', 'd','e',
			'f', 'g', 'h', 'i', 'j',
			'k', 'l'
			];

function crack(psd)
{

	for (var i = dico.length - 1; i >= 0; i--) 
	{
		if (dico[i]==psd) 
		{
		console.log(dico[i]);
		return ;
		}	

	}

	for (var i = dico.length - 1; i >= 0; i--) 
	{

		for (var j = dico.length - 1; j >= 0; j--) 
			{
			
				var mdt=dico[i]+dico[j];
				if (mdt==psd) 
				{
					console.log(mdt);
					return;
				}
			}
	}

		for (var i = dico.length - 1; i >= 0; i--) 
		{

			for (var j = dico.length - 1; j >= 0; j--) 
			{
				
				for (var k = dico.length - 1; k >= 0; k--) 
				{

					var mdt=dico[i]+dico[j]+dico[k];
					
					if (mdt==psd) 
					{
						console.log(mdt);
						return;
					}

				}

			}
		}
		


		for (var i = dico.length - 1; i >= 0; i--) 
		{

			for (var j = dico.length - 1; j >= 0; j--) 
			{
				
				for (var k = dico.length - 1; k >= 0; k--) 
				{
					for (var l = dico.length - 1; l >= 0; l--) 
					{
						var mdt=dico[i]+dico[j]+dico[k]+dico[l];
						if (mdt==psd) 
						{
							console.log(mdt);
							return;

						}
					}
				}
			}
		}

		for (var i = dico.length - 1; i >= 0; i--) 
		{

			for (var j = dico.length - 1; j >= 0; j--) 
			{
				
				for (var k = dico.length - 1; k >= 0; k--) 
				{
					for (var l = dico.length - 1; l >= 0; l--) 
					{
						for (var m = dico.length - 1; m >= 0; m--) 
						{

							var mdt=dico[i]+dico[j]+dico[k]+dico[l]+dico[m];
							if (mdt==psd) 
							{
								console.log(mdt);
								return;

							}
						}
					}
				}
			}
		}




}

crack(psd);