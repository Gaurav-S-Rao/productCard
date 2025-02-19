import React from 'react';

class PriceTag extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {
      price
    } = this.props;

    return (
      <div className="price-tag">
	      {price}
      </div>
    );
  }
}

export default PriceTag;