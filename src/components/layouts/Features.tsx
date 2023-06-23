import { Tab, Tabs } from '../Tabs'

function Features() {
  return (
    <section className="features">
      <div className="features-text">
        <h2>Features</h2>
        <p>
          Our aim is to make it quick and easy for you to access your favourite
          website. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </div>
      <Tabs>
        <Tab label="Simple Bookmarking">Simple Bookmarking</Tab>
        <Tab label="Speedy Searching">Speedy Searching</Tab>
        <Tab label="Easy Sharing">Easy Sharing</Tab>
      </Tabs>
    </section>
  )
}

export default Features
