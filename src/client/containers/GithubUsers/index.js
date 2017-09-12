import { connect } from "react-redux";
import { fetchGithubUsers } from "../../actions";
import GithubUsers from "./components";

function mapStateToProps(state) {
  return {
    githubUsers: state.githubUsers
  };
}
const mapDispatchToProps = {
  fetchGithubUsers
};

export default connect(mapStateToProps, mapDispatchToProps)(GithubUsers);
