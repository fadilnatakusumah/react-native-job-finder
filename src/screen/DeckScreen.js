import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  Text, StyleSheet, View, FlatList,
} from 'react-native'
import { ListItem } from 'react-native-elements';

class DeckScreen extends Component {
  static defaultProps = {
    jobs: [
      {

        "id": "6a9ef9b8-5e6a-44e0-8507-348b7877eea9",
        "type": "Full Time",
        "url": "https://jobs.github.com/positions/6a9ef9b8-5e6a-44e0-8507-348b7877eea9",
        "created_at": "Fri Jan 11 20:53:46 UTC 2019",
        "company": "Citrusbyte",
        "company_url": "http://citrusbyte.com",
        "location": "Remote",
        "title": " Software Solutions Architect - Remote",
        "description": "<p><a href=\"citrusbyte.com\">Citrusbyte</a> is a team of experts who set sound principles and best practices into action. Our team solves complex problems and builds amazing things for some of the largest global household names. We work with team members around the world and have offices in LA and New York. This is a remote first role.</p>\n<p>This role will require some travel to client sites as necessary. You must be authorized to work in the United States.</p>\n<p>As <strong>Software Solutions Architect</strong>, you are a polyglot engineer with a hunger for learning new languages and tools. You see yourself as a maker and you are interested in all steps of the process, from understanding the challenge, to designing, developing and deploying.</p>\n<p>As a consulting Software Solutions Architect, you are always happy to be learning, choosing the right tool for the job but also becoming the foremost domain expert about our client’s business. You should always be able to answer the question: What have I learned this week?</p>\n<p><strong>Responsibilities and Duties:</strong></p>\n<p>In this role, you will participate in the full life cycle of application development for our clients with duties including but not limited to:</p>\n<ul>\n<li>Assist the sales team with uncovering and understanding technical requirements and producing estimates and risk assessments for new projects.</li>\n<li>Become the domain expert for our clients’ business and gain a deep knowledge of their infrastructure and internal systems.</li>\n<li>Assess and research technologies to determine their fitness for a particular purpose.</li>\n<li>Educate and train clients and stakeholders about the benefits of our approach and process to software and solutions development.</li>\n<li>Collaborate with the engineering team on project delivery by contributing code and reviewing pull requests.</li>\n<li>Collaborate with the team to create a successful project hand-off plan</li>\n</ul>\n<p><strong>Qualifications and Skills:</strong></p>\n<ul>\n<li>10+ years of experience in software engineering.</li>\n<li>Over 5+ years of experience directly consulting with clients.</li>\n<li>Eager to learn new languages and technologies.</li>\n<li>Proficient and experienced with at least 3 programming languages; JavaScript, Ruby, Elixir, Go, C# and Python are all a plus.</li>\n<li>Strong experience designing and delivering features on both server and client sides of the development stack.</li>\n<li>Experience with AWS, GCP, or Azure.</li>\n<li>Experience working with Chef, Ansible, and other provisioning technologies is a plus.</li>\n<li>BS of Computer Science or similar academic background is a plus.</li>\n<li>Excellent skills in spoken and written English language.</li>\n<li>Possess a strong and reliable internet connection.</li>\n</ul>\n<p><strong>Benefits at Citrusbyte:</strong></p>\n<p>While we have offices in LA and New York, we work remotely with team members around the world</p>\n<ul>\n<li>\n<strong>Remote first</strong> - Work from your remote location if you are not called to travel to client site</li>\n<li>\n<strong>Team retreats</strong> - We get together at an inspiring location to meet, work and play</li>\n<li>\n<strong>Healthy body, healthy mind - happy team</strong> - We offer vacation and support healthy lifestyles through our physical fitness and continuing education benefits program.</li>\n</ul>\n<p><em>Citrusbyte expects team members to be honest, trustworthy, and operate with integrity. Discrimination and all unlawful harassment (including sexual harassment) in employment is not tolerated. We encourage success based on our individual merits and abilities, and all decisions regarding recruitment, hiring, promotion, compensation, skills development decisions such as training, and all other terms and conditions of our relationship, will be made without regard to race, nationality, national origin, citizenship status, employment engagement status, ethnicity, ethnic origin, color, creed, religion, belief, age, marital status, pregnancy, gender, gender identity, sexual preference, lifestyle, social class, military status, disability, physical features, or any other protected status. We oppose all forms of unlawful or unfair discrimination.</em></p>\n<p><em>Citrusbyte is an equal opportunity employer.</em></p>\n<p><em>No statements by Citrusbyte are intended to create an offer of employment unless made in a writing signed by an officer of the company and no offer shall become effective unless countersigned by the prospective employee.</em></p>\n",
        "how_to_apply": "<p>Apply directly <a href=\"https://citrusbyte.applytojob.com/apply/WLPNjpqVlF/Software-Solutions-Architect-Remote?source=GitHub%20Jobs\">on our careers page</a>.</p>\n",
        "company_logo": "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcGRiIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--b3af3102db43ff5a964a3583f497316efb25506e/cb-logo-badge-2015.png"

      },
      {

        "id": "268c9c83-aabe-4011-859f-8c325e7120d6",
        "type": "Full Time",
        "url": "https://jobs.github.com/positions/268c9c83-aabe-4011-859f-8c325e7120d6",
        "created_at": "Fri Feb 08 19:04:32 UTC 2019",
        "company": "TechEmpower, Inc",
        "company_url": "https://www.techempower.com/",
        "location": "Los Angeles, CA",
        "title": "Java / C# Programmers Wanted!",
        "description": "<p>We're looking for good programmers with an interest in web development.\nIf you're smart and motivated, and you want to work in a supportive\nenvironment, then let's talk.</p>\n<p><strong>About Us</strong></p>\n<p>TechEmpower is a custom software company. We help our clients understand their\nneeds, plan solutions for them, and build software -- on time and on target.  By taking away their technical headaches, we help our clients succeed.</p>\n<ul>\n<li>\n<p>We're small.  We have 30 employees and we work in teams of 1-6.</p>\n</li>\n<li>\n<p>We're friendly.  Our office is professional and collegiate,\nlike a computer lab staffed by adults.  We help each other out.</p>\n</li>\n<li>\n<p>We're mostly a web shop.  We do a bit of desktop, and a bit of\nnative mobile, but 90% of our work is creating complex web applications.</p>\n</li>\n<li>\n<p>We work with a wide range of technologies (see Technologies below) but\nJava is first in our heart.  At this time we are only considering candidates with Java or C#.</p>\n</li>\n<li>\n<p>We're established.  We were founded way back in 1997, which means we've\ncontinued to grow despite the dot-com bomb, the great recession,\nand several hurricanes.</p>\n</li>\n<li>\n<p>We're the authority on web framework performance (<a href=\"https://twitter.com/hashtag/techempower\">https://twitter.com/hashtag/techempower</a>)</p>\n</li>\n</ul>\n<p><strong>About You</strong></p>\n<p>First and foremost, you're a good programmer.  You like to write code and design\nsoftware solutions.  You like to learn new languages, new APIs, and new\ntechnologies.  You like the freedom to do things the right way.  You're a good\ncommunicator and play well with others.</p>\n<p><strong>The Job</strong></p>\n<p>As a programmer, you'll be working on a team, headed by a tech lead,\nto design and implement code.  We don't do top-down design; everyone gets a say\nin how the software will work.  Teams work on one project at a time, and\nprojects run from 3 months to several years, but usually 3-6 months.</p>\n<p>We like to keep our programmers programming, and follow a task-oriented process\ndesigned to minimize meetings and busywork.</p>\n<p><strong>The Interview Process</strong></p>\n<p>We review every application we get.  If your application shows promise,\nwe'll contact you for a brief telephone interview.  Yes, there will be a quiz,\nbut our main goal is to get to know you better.  If that goes well, you'll\nbe invited to a series of in-person interviews.</p>\n<p>We are very selective.  We all participate in the hiring process\nbecause we care about who we work with.  So expect to meet a lot of us!</p>\n<p><strong>Work Samples</strong></p>\n<p>If you can, please provide a sample of your work.  Github links work best.\nDon't be shy!  We need to see what you can do.</p>\n<p>Preference will be shown to candidates with verifiable work samples.</p>\n<p><strong>Technology</strong></p>\n<p>The technologies we use vary over time with our mix of projects. Here is a snapshot of what we're using now:</p>\n<p>Languages: Java, JavaScript, Python, Go, C#, Ruby, PHP</p>\n<p>Tools: Git, Docker, Jenkins, Sonar, IntelliJ, Eclipse, Ant, Maven</p>\n<p>Web: Jersey, .NET Core, React, Django, Node.js, Go, Rails, Handlebars, Backbone, Ember,</p>\n<p>Angular, Knockout, Servlets, jQuery</p>\n<p>Mobile: iOS, Android, PhoneGap</p>\n<p>Hosting: AWS, Rackspace Cloud, Linux deployments</p>\n<p>Data Persistence: ORM (Hibernate, etc.), Postgres, MySQL, MS SQL Server, NoSQL (Redis, Riak, etc.)</p>\n<p>We don't expect new hires to have experience with all of these, but we do expect you'll learn more about them every day.</p>\n<p><strong>Apply</strong></p>\n<p>If this sounds like the kind of place you'd like to work, please apply now!</p>\n",
        "how_to_apply": "<p>Please apply at <a href=\"https://jobs.techempower.com/github\">https://jobs.techempower.com/github</a></p>\n",
        "company_logo": "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdmRkIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--8ee03fca5cdec06df2d5628156edc4d60a9afa9e/techempower.jpg"

      }
    ]
  }

  static navigationOptions = () => {
    return {
      headerTitle: 'Job Results'
    }
  }

  viewDetail = (item) => {
    // console.log('item', item)
    this.props.navigation.navigate('DetailJob', { item });
  }

  keyExtractor = (item, index) => item.id;

  renderListJobs = ({ item }) => (
    <ListItem
      title={item.title}
      subtitle={item.type}
      leftAvatar={{
        source: { uri: item.company_logo }
      }}
      onPress={() => this.viewDetail(item)}
    />
  )

  render() {
    return (
      <View style={styles.containerStyle}>
        {
          this.props.jobs.length === 0
            ? (
              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 25 }}>There's no job</Text>
              </View>
            )
            : <FlatList
              keyExtractor={this.keyExtractor}
              data={this.props.jobs}
              renderItem={this.renderListJobs}
            />
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    // marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  }
})

const mapStateToProps = state => {
  return {
    jobs: state.jobs.jobs
  }
}

// const mapDispatchToProps = dispatch => {
//   return bindActionCreators(actions, dispatch);
// }

export default connect(mapStateToProps)(DeckScreen);