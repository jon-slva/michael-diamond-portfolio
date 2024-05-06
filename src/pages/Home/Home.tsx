import './Home.scss'

export function Home(): React.ReactElement {
	return (
		<main>

			<section style={{
				width: '100%',
				backgroundColor: 'lightblue',
				height: '90vh',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',

			}}>
				<h1>Hero goes here</h1>
			</section>

			<section style={{
				width: '100%',
			}}>
				<aside style={{
					textAlign: 'center',
					backgroundColor: 'lightgreen',
				}}>
					<h2>
						Gallery filter goes here
					</h2>
				</aside>

				<aside style={{
					textAlign: 'center',
					backgroundColor: 'orange',
				}}>
					<h2>
						Gallery grid goes here
					</h2>
				</aside>
			</section>




		</main>
	)
}