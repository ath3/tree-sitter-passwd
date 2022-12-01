module.exports = grammar({
  name: 'passwd',

  extras: $ => [/\s+/],

  rules: {
    source_file: $ => repeat($.entry),
    entry: $ => seq(
      $.user, $.separator, $.auth, $.separator, $.uid,
      $.separator, $.gid, $.separator, optional($.gecos),
      $.separator, $.home, $.separator, $.shell, optional('\n')
    ),
    separator: $ => ':',
    user: $ => /[^:]+/,
    auth: $ => /[^:]+/,
    uid: $ => /[0-9]+/,
    gid: $ => /[0-9]+/,
    gecos: $ => /[^:]+/,
    home: $ => /[^:]+/,
    shell: $ => /[^:\n]+/,
  }
});
