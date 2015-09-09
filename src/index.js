export default function ({ Plugin, types: t }) {
  return new Plugin("minify-number-cast", {
    metadata: {
      group: "builtin-pre"
    },

    visitor: {
      CallExpression: function(node) {
        var callee = this.get("callee");
        if (callee.isIdentifier() && callee.node.name === "Number") {
          if (node.arguments.length > 0) {
            if (typeof node.arguments[0].value === 'number') {
              return node.arguments[0];
            } else {
              return t.unaryExpression("+", node.arguments[0]);
            }
          } else {
            return t.literal(0);
          }
        }
      }
    }
  });
}
