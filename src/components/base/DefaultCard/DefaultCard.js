import PropTypes from "prop-types";
import "components/base/DefaultCard/DefaultCard.scss";

const DefaultCard = ({ post }) => {
    return (
        <article className="default-card">
            <p className="text_l text_weight_accent">{post.title}</p>
            <p className="text_m">{post.description}</p>
        </article>
    );
};

DefaultCard.propTypes = {
    post: PropTypes.object.isRequired,
};

export default DefaultCard;
