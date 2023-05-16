import React from "react";

import {FormattedDate} from 'react-intl';
import { FormattedMessage } from "react-intl";
function formatNumberWithMillion(number) {
  return number+ 'Millón'
}
const Job = (props) => {
  return (
    <tr>
      <th scope="row">
        <FormattedMessage
              id="offer.id"
              defaultMessage="{id}"
              values={{ id: props.offer.id }}
        />
      </th>
      <td>
        <FormattedMessage
            id="offer.name"
            defaultMessage="{name}"
            values={{ name: props.offer.name }}
        />
      </td>
      <td>
        <FormattedMessage
          id="offer.company"
          defaultMessage="{company}"
          values={{ company: props.offer.company }}
        />
        
      </td>
      <td>{formatNumberWithMillion(props.offer.salary)}</td>
      <td>
        <FormattedMessage
          id="offer.city"
          defaultMessage="{city}"
          values={{ city: props.offer.city }}
        />
      </td>
      
      <td>
        <FormattedDate
          value={new Date(props.offer.date)}
          year='numeric'
          month='long'
          day='numeric'
          weekday='long'
        />
      </td>
      <td>{props.offer.númeroVisitas.toLocaleString()}</td>
    </tr>
  );
};

export default Job;
