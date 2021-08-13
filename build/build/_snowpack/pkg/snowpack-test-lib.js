import { r as react } from './common/index-08d32ee4.js';
import { F as FormControl } from './common/index-df601806.js';
import { I as InputLabel } from './common/index-822a9416.js';
import { I as Input } from './common/index-0796fdd7.js';
import './common/withStyles-0887411d.js';
import './common/useFormControl-35d7dcc7.js';
import './common/capitalize-fb882d94.js';

var lib = {
  Thingamajig: react.createElement(
    FormControl,
    {},
    [
      react.createElement(
        InputLabel,
        {
          htmlFor: "my-input",
        },
        "Email address"
      ),
      react.createElement(
        Input,
        {
          id: "my-input"
        }
      )
    ]
  )
};

var Thingamajig = lib.Thingamajig;
export { Thingamajig };
