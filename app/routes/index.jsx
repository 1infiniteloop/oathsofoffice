const people = [
	{
		name: "Kamala Devi Harris",
		role: "Vice President",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/4/41/Kamala_Harris_Vice_Presidential_Portrait.jpg",
		bio: "Kamala Devi Harris is an American politician and attorney who is the 49th and current vice president of the United States.",
		ooo: "https://www.youtube.com/watch?v=q7TCqVoIgwM&ab_channel=CNBCTelevision",
	},
	{
		name: "Troy A. Miller",
		role: "Acting Commissioner of the United States Customs and Border Protection",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/b/b0/Troy_Miller%2C_Senior_Official_Performing_the_Duties_of_the_Commissioner.jpg",
		bio: "Troy A. Miller is an American law enforcement official currently serving as the Acting Commissioner of the United States Customs and Border Protection",
		ooo: "",
	},
	{
		name: "Douglas O'Donnell",
		role: "Acting Commissioner of the IRS",
		imageUrl: "https://images.wsj.net/im-689853?width=599&height=399",
		bio: "Douglas (Doug) O'Donnell serves as Acting Commissioner of the IRS.",
		ooo: "",
	},
	{
		name: "Ronald L. Davis",
		role: "Director of the United States Marshals Service",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/9/9d/Ronald_Davis%2C_US_Marshals_Service_Director.jpg",
		bio: "Ronald L. Davis is an American law enforcement officer. He is Director of the United States Marshals Service.",
		ooo: "",
	},
	{
		name: "Roslynn R. Mauskopf",
		role: "Director of the Administrative Office of the United States Courts",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Roslynn_R_Mauskopf.jpg/220px-Roslynn_R_Mauskopf.jpg",
		bio: "Roslynn Renee Mauskopf is an American lawyer and jurist serving as a United States district judge of the United States District Court for the Eastern District of New York and the director of the Administrative Office of the United States Courts.",
		ooo: "",
	},
	{
		name: "Michael J. Hsu",
		role: "Acting Comptroller of the Currency",
		imageUrl:
			"https://www.occ.gov/about/who-we-are/comptroller/tablet/img-michael-hsu-bio.jpg",
		bio: "Michael J. Hsu is an American civil servant who is the Acting Comptroller of the Currency.",
		ooo: "",
	},
	{
		name: "François Villeroy",
		role: "Chair of the Bank for International Settlements",
		imageUrl: "https://www.bis.org/img/featureimg/p220113a.jpg",
		bio: "Chair of the Bank for International Settlements (BIS)",
		ooo: "",
	},
	{
		name: "António Guterres",
		role: "Secretary-General of the United Nations",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/d/d1/Ant%C3%B3nio_Guterres_2021.jpg",
		bio: "Secretary-General of the United Nations",
		ooo: "",
	},
	{
		name: "Kristalina Georgieva",
		role: "Managing Director of the International Monetary Fund",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/e/eb/Kristalina_Georgieva_Headshot.jpg",
		bio: "Managing Director of the International Monetary Fund",
		ooo: "",
	},
	{
		name: "Rich Delmar",
		role: "Deputy Inspector General of the Department of the Treasury.",
		imageUrl:
			"https://www.pandemicoversight.gov/sites/default/files/styles/member_thumbnail/public/2020-04/Richard-Delmar-profile.jpg?itok=aAzNdx-g",
		bio: "Rich Delmar is the Deputy Inspector General of the Department of the Treasury.",
		ooo: "",
	},
	{
		name: "Marilynn Malerba",
		role: "Treasurer of the United States",
		imageUrl:
			"https://www.mohegan.nsn.us/images/default-source/masthead-images/about/chief-lynn-malerba.jpg?sfvrsn=cebdaaa8_3",
		bio: "Marilynn Roberge Malerba is an American tribal leader and former nurse who is the lifetime chief of the Mohegan Tribe and the Treasurer of the United States.",
		ooo: "",
	},
	{
		name: "Gina Raimondo",
		role: "United States Secretary of Commerce",
		imageUrl:
			"https://s3.amazonaws.com/thumbnails.thecrimson.com/photos/2018/05/17/135357_1330909.jpg.1333x2000_q95_crop-smart_upscale.jpg",
		bio: "United States Secretary of Commerce",
		ooo: "",
	},
	{
		name: "Lloyd Austin",
		role: "United States Secretary of Defense",
		imageUrl:
			"https://media.defense.gov/2021/Jan/29/2002592436/-1/-1/0/210123-A-CN110-0001.JPG",
		bio: "United States Secretary of Defense",
		ooo: "",
	},
	{
		name: "Denis McDonough",
		role: "United States Secretary of Veterans Affairs",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/6/61/Secretary_McDonough%2C_official_photo.jpg",
		bio: "United States Secretary of Veterans Affairs",
		ooo: "",
	},
	{
		name: "Alina M. Semo",
		role: "United States Secretary of Veterans Affairs",
		imageUrl:
			"https://i0.wp.com/foia.blogs.archives.gov/wp-content/uploads/sites/2/2017/01/semo-official.jpg?ssl=1",
		bio: "Alina M. Semo became the Director of the Office of Government Information Services (OGIS)",
		ooo: "",
	},
	{
		name: "Debra Steidel Wall",
		role: "acting archivist of the United States",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Debra_Steidel_Wall_official_photo.jpg/800px-Debra_Steidel_Wall_official_photo.jpg",
		bio: "Debra Steidel Wall is an American archivist serving as the acting archivist of the United States, the head of the National Archives and Records Administration.",
		ooo: "",
	},
];

export default function Index() {
	return (
		<div className="bg-white py-8">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl sm:text-center">
					<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
						Meet our leadership
					</h2>
					<p className="mt-3 text-lg leading-8 text-gray-600">
						Oaths of office's
					</p>
				</div>
				<ul
					role="list"
					className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:max-w-4xl lg:gap-x-8 xl:max-w-none"
				>
					{people.map((person) => (
						<li
							key={person.name}
							className="flex flex-col gap-8 xl:flex-row"
						>
							<img
								className="aspect-[4/5] w-52 flex-none rounded-2xl object-cover"
								src={person.imageUrl}
							/>
							<div className="flex-auto">
								<h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">
									{person.name}
								</h3>
								<p className="text-base leading-7 text-gray-600">
									{person.role}
								</p>
								<p className="mt-6 text-base leading-7 text-gray-600">
									{person.bio}
								</p>
								{person.ooo && (
									<div className="py-3">
										<a
											href={person.ooo}
											className="mt-6 text-base leading-7 text-blue-600"
											target="_blank"
										>
											Oath of Office Link
										</a>
									</div>
								)}
							</div>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
