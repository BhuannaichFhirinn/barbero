import { describe, it, expect } from 'vitest';
import {
  parseBoolean,
  isBooleanable,
  isTruthyString,
  isFalseyString,
} from '../../src/core/parsing.js';

// ---------------------------------------------------------------------------
// parseBoolean
// ---------------------------------------------------------------------------

describe('parseBoolean', () => {
  // --- Boolean primitives ---
  it('returns true for boolean true', () => {
    expect(parseBoolean(true)).toBe(true);
  });

  it('returns false for boolean false', () => {
    expect(parseBoolean(false)).toBe(false);
  });

  // --- Number primitives ---
  it('returns true for number 1', () => {
    expect(parseBoolean(1)).toBe(true);
  });

  it('returns false for number 0', () => {
    expect(parseBoolean(0)).toBe(false);
  });

  it('returns false for other numbers', () => {
    expect(parseBoolean(123)).toBe(false);
    expect(parseBoolean(-1)).toBe(false);
    expect(parseBoolean(2)).toBe(false);
  });

  // --- Truthy string representations ---
  it('returns true for "true" (case variants + whitespace)', () => {
    expect(parseBoolean('true')).toBe(true);
    expect(parseBoolean('TRUE')).toBe(true);
    expect(parseBoolean('True')).toBe(true);
    expect(parseBoolean('  true  ')).toBe(true);
  });

  it('returns true for "t"', () => {
    expect(parseBoolean('t')).toBe(true);
    expect(parseBoolean('T')).toBe(true);
  });

  it('returns true for "1" (string)', () => {
    expect(parseBoolean('1')).toBe(true);
  });

  it('returns true for "yes" (case variants)', () => {
    expect(parseBoolean('yes')).toBe(true);
    expect(parseBoolean('YES')).toBe(true);
    expect(parseBoolean('Yes')).toBe(true);
  });

  it('returns true for "y"', () => {
    expect(parseBoolean('y')).toBe(true);
    expect(parseBoolean('Y')).toBe(true);
  });

  it('returns true for "on"', () => {
    expect(parseBoolean('on')).toBe(true);
    expect(parseBoolean('ON')).toBe(true);
  });

  it('returns true for "enabled"', () => {
    expect(parseBoolean('enabled')).toBe(true);
    expect(parseBoolean('Enabled')).toBe(true);
    expect(parseBoolean('ENABLED')).toBe(true);
  });

  it('returns true for "active"', () => {
    expect(parseBoolean('active')).toBe(true);
    expect(parseBoolean('ACTIVE')).toBe(true);
  });

  it('returns true for "allow"', () => {
    expect(parseBoolean('allow')).toBe(true);
    expect(parseBoolean('ALLOW')).toBe(true);
  });

  it('returns true for "up"', () => {
    expect(parseBoolean('up')).toBe(true);
    expect(parseBoolean('UP')).toBe(true);
  });

  it('returns true for "online"', () => {
    expect(parseBoolean('online')).toBe(true);
    expect(parseBoolean('ONLINE')).toBe(true);
  });

  it('returns true for "open"', () => {
    expect(parseBoolean('open')).toBe(true);
    expect(parseBoolean('OPEN')).toBe(true);
  });

  it('returns true for "pass"', () => {
    expect(parseBoolean('pass')).toBe(true);
    expect(parseBoolean('PASS')).toBe(true);
  });

  it('returns true for "ok"', () => {
    expect(parseBoolean('ok')).toBe(true);
    expect(parseBoolean('OK')).toBe(true);
  });

  it('returns true for "success"', () => {
    expect(parseBoolean('success')).toBe(true);
    expect(parseBoolean('SUCCESS')).toBe(true);
  });

  it('returns true for "positive"', () => {
    expect(parseBoolean('positive')).toBe(true);
    expect(parseBoolean('POSITIVE')).toBe(true);
  });

  it('returns true for "valid"', () => {
    expect(parseBoolean('valid')).toBe(true);
    expect(parseBoolean('VALID')).toBe(true);
  });

  it('returns true for "accepted"', () => {
    expect(parseBoolean('accepted')).toBe(true);
    expect(parseBoolean('ACCEPTED')).toBe(true);
  });

  it('returns true for "running"', () => {
    expect(parseBoolean('running')).toBe(true);
    expect(parseBoolean('RUNNING')).toBe(true);
  });

  it('returns true for "connected"', () => {
    expect(parseBoolean('connected')).toBe(true);
    expect(parseBoolean('CONNECTED')).toBe(true);
  });

  it('returns true for "available"', () => {
    expect(parseBoolean('available')).toBe(true);
    expect(parseBoolean('AVAILABLE')).toBe(true);
  });

  // --- Falsy string representations ---
  it('returns false for "false" (case variants + whitespace)', () => {
    expect(parseBoolean('false')).toBe(false);
    expect(parseBoolean('FALSE')).toBe(false);
    expect(parseBoolean('False')).toBe(false);
    expect(parseBoolean('  false  ')).toBe(false);
  });

  it('returns false for "f"', () => {
    expect(parseBoolean('f')).toBe(false);
    expect(parseBoolean('F')).toBe(false);
  });

  it('returns false for "0" (string)', () => {
    expect(parseBoolean('0')).toBe(false);
  });

  it('returns false for "no"', () => {
    expect(parseBoolean('no')).toBe(false);
    expect(parseBoolean('NO')).toBe(false);
  });

  it('returns false for "n"', () => {
    expect(parseBoolean('n')).toBe(false);
    expect(parseBoolean('N')).toBe(false);
  });

  it('returns false for "off"', () => {
    expect(parseBoolean('off')).toBe(false);
    expect(parseBoolean('OFF')).toBe(false);
  });

  it('returns false for "disabled"', () => {
    expect(parseBoolean('disabled')).toBe(false);
    expect(parseBoolean('DISABLED')).toBe(false);
  });

  it('returns false for "inactive"', () => {
    expect(parseBoolean('inactive')).toBe(false);
  });

  it('returns false for "deny"', () => {
    expect(parseBoolean('deny')).toBe(false);
  });

  it('returns false for "down"', () => {
    expect(parseBoolean('down')).toBe(false);
  });

  it('returns false for "offline"', () => {
    expect(parseBoolean('offline')).toBe(false);
  });

  it('returns false for "closed"', () => {
    expect(parseBoolean('closed')).toBe(false);
  });

  it('returns false for "fail"', () => {
    expect(parseBoolean('fail')).toBe(false);
  });

  it('returns false for "nok"', () => {
    expect(parseBoolean('nok')).toBe(false);
  });

  it('returns false for "failure"', () => {
    expect(parseBoolean('failure')).toBe(false);
  });

  it('returns false for "negative"', () => {
    expect(parseBoolean('negative')).toBe(false);
  });

  it('returns false for "invalid"', () => {
    expect(parseBoolean('invalid')).toBe(false);
  });

  it('returns false for "rejected"', () => {
    expect(parseBoolean('rejected')).toBe(false);
  });

  it('returns false for "stopped"', () => {
    expect(parseBoolean('stopped')).toBe(false);
  });

  it('returns false for "disconnected"', () => {
    expect(parseBoolean('disconnected')).toBe(false);
  });

  it('returns false for "unavailable"', () => {
    expect(parseBoolean('unavailable')).toBe(false);
  });

  // --- Boxed primitives ---
  it('handles boxed Boolean(true)', () => {
    expect(parseBoolean(new Boolean(true))).toBe(true);
  });

  it('handles boxed Boolean(false)', () => {
    expect(parseBoolean(new Boolean(false))).toBe(false);
  });

  it('handles boxed String("yes")', () => {
    expect(parseBoolean(new String('yes'))).toBe(true);
  });

  it('handles boxed String("no")', () => {
    expect(parseBoolean(new String('no'))).toBe(false);
  });

  it('handles boxed String("maybe")', () => {
    expect(parseBoolean(new String('maybe'))).toBe(false);
  });

  it('handles boxed Number(1)', () => {
    expect(parseBoolean(new Number(1))).toBe(true);
  });

  it('handles boxed Number(0)', () => {
    expect(parseBoolean(new Number(0))).toBe(false);
  });

  it('handles boxed Number(2)', () => {
    expect(parseBoolean(new Number(2))).toBe(false);
  });

  // --- Unrecognised inputs ---
  it('returns false for null', () => {
    expect(parseBoolean(null)).toBe(false);
  });

  it('returns false for undefined', () => {
    expect(parseBoolean(undefined)).toBe(false);
  });

  it('returns false for empty string', () => {
    expect(parseBoolean('')).toBe(false);
  });

  it('returns false for arbitrary string', () => {
    expect(parseBoolean('maybe')).toBe(false);
    expect(parseBoolean('hello')).toBe(false);
  });

  it('returns false for arrays', () => {
    expect(parseBoolean([])).toBe(false);
    expect(parseBoolean([1])).toBe(false);
  });

  it('returns false for plain objects', () => {
    expect(parseBoolean({})).toBe(false);
  });
});

// ---------------------------------------------------------------------------
// isBooleanable
// ---------------------------------------------------------------------------

describe('isBooleanable', () => {
  // --- Truthy representations are booleanable ---
  it('returns true for boolean true', () => {
    expect(isBooleanable(true)).toBe(true);
  });

  it('returns true for number 1', () => {
    expect(isBooleanable(1)).toBe(true);
  });

  it('returns true for "yes"', () => {
    expect(isBooleanable('yes')).toBe(true);
    expect(isBooleanable('YES')).toBe(true);
  });

  it('returns true for "on"', () => {
    expect(isBooleanable('on')).toBe(true);
  });

  it('returns true for "enabled"', () => {
    expect(isBooleanable('enabled')).toBe(true);
  });

  it('returns true for "active"', () => {
    expect(isBooleanable('active')).toBe(true);
  });

  it('returns true for "allow"', () => {
    expect(isBooleanable('allow')).toBe(true);
  });

  it('returns true for "up"', () => {
    expect(isBooleanable('up')).toBe(true);
  });

  it('returns true for "online"', () => {
    expect(isBooleanable('online')).toBe(true);
  });

  it('returns true for "open"', () => {
    expect(isBooleanable('open')).toBe(true);
  });

  it('returns true for "pass"', () => {
    expect(isBooleanable('pass')).toBe(true);
  });

  it('returns true for "ok"', () => {
    expect(isBooleanable('ok')).toBe(true);
  });

  it('returns true for "success"', () => {
    expect(isBooleanable('success')).toBe(true);
  });

  it('returns true for "positive"', () => {
    expect(isBooleanable('positive')).toBe(true);
  });

  it('returns true for "valid"', () => {
    expect(isBooleanable('valid')).toBe(true);
  });

  it('returns true for "accepted"', () => {
    expect(isBooleanable('accepted')).toBe(true);
  });

  it('returns true for "running"', () => {
    expect(isBooleanable('running')).toBe(true);
  });

  it('returns true for "connected"', () => {
    expect(isBooleanable('connected')).toBe(true);
  });

  it('returns true for "available"', () => {
    expect(isBooleanable('available')).toBe(true);
  });

  // --- Falsy representations are also booleanable ---
  it('returns true for boolean false', () => {
    expect(isBooleanable(false)).toBe(true);
  });

  it('returns true for number 0', () => {
    expect(isBooleanable(0)).toBe(true);
  });

  it('returns true for "no"', () => {
    expect(isBooleanable('no')).toBe(true);
    expect(isBooleanable('NO')).toBe(true);
  });

  it('returns true for "off"', () => {
    expect(isBooleanable('off')).toBe(true);
  });

  it('returns true for "disabled"', () => {
    expect(isBooleanable('disabled')).toBe(true);
  });

  it('returns true for "inactive"', () => {
    expect(isBooleanable('inactive')).toBe(true);
  });

  it('returns true for "deny"', () => {
    expect(isBooleanable('deny')).toBe(true);
  });

  it('returns true for "down"', () => {
    expect(isBooleanable('down')).toBe(true);
  });

  it('returns true for "offline"', () => {
    expect(isBooleanable('offline')).toBe(true);
  });

  it('returns true for "closed"', () => {
    expect(isBooleanable('closed')).toBe(true);
  });

  it('returns true for "fail"', () => {
    expect(isBooleanable('fail')).toBe(true);
  });

  it('returns true for "nok"', () => {
    expect(isBooleanable('nok')).toBe(true);
  });

  it('returns true for "failure"', () => {
    expect(isBooleanable('failure')).toBe(true);
  });

  it('returns true for "negative"', () => {
    expect(isBooleanable('negative')).toBe(true);
  });

  it('returns true for "invalid"', () => {
    expect(isBooleanable('invalid')).toBe(true);
  });

  it('returns true for "rejected"', () => {
    expect(isBooleanable('rejected')).toBe(true);
  });

  it('returns true for "stopped"', () => {
    expect(isBooleanable('stopped')).toBe(true);
  });

  it('returns true for "disconnected"', () => {
    expect(isBooleanable('disconnected')).toBe(true);
  });

  it('returns true for "unavailable"', () => {
    expect(isBooleanable('unavailable')).toBe(true);
  });

  // --- Boxed primitives ---
  it('handles boxed Boolean(true)', () => {
    expect(isBooleanable(new Boolean(true))).toBe(true);
  });

  it('handles boxed Boolean(false)', () => {
    expect(isBooleanable(new Boolean(false))).toBe(true);
  });

  it('handles boxed String("yes")', () => {
    expect(isBooleanable(new String('yes'))).toBe(true);
  });

  it('handles boxed String("no")', () => {
    expect(isBooleanable(new String('no'))).toBe(true);
  });

  it('handles boxed String("maybe")', () => {
    expect(isBooleanable(new String('maybe'))).toBe(false);
  });

  it('handles boxed Number(1)', () => {
    expect(isBooleanable(new Number(1))).toBe(true);
  });

  it('handles boxed Number(0)', () => {
    expect(isBooleanable(new Number(0))).toBe(true);
  });

  it('handles boxed Number(2)', () => {
    expect(isBooleanable(new Number(2))).toBe(false);
  });

  // --- Whitespace trimming ---
  it('handles whitespace-padded strings', () => {
    expect(isBooleanable('  true  ')).toBe(true);
    expect(isBooleanable('  no  ')).toBe(true);
  });

  // --- Unrecognised inputs ---
  it('returns false for null', () => {
    expect(isBooleanable(null)).toBe(false);
  });

  it('returns false for undefined', () => {
    expect(isBooleanable(undefined)).toBe(false);
  });

  it('returns false for empty string', () => {
    expect(isBooleanable('')).toBe(false);
  });

  it('returns false for arbitrary string', () => {
    expect(isBooleanable('maybe')).toBe(false);
    expect(isBooleanable('hello')).toBe(false);
  });

  it('returns false for number 123', () => {
    expect(isBooleanable(123)).toBe(false);
  });

  it('returns false for arrays', () => {
    expect(isBooleanable([])).toBe(false);
  });

  it('returns false for plain objects', () => {
    expect(isBooleanable({})).toBe(false);
  });
});

// ---------------------------------------------------------------------------
// isTruthyString
// ---------------------------------------------------------------------------

describe('isTruthyString', () => {
  // --- Truthy representations ---
  it('returns true for boolean true', () => {
    expect(isTruthyString(true)).toBe(true);
  });

  it('returns true for number 1', () => {
    expect(isTruthyString(1)).toBe(true);
  });

  it('returns true for "true" (case variants + whitespace)', () => {
    expect(isTruthyString('true')).toBe(true);
    expect(isTruthyString('TRUE')).toBe(true);
    expect(isTruthyString('True')).toBe(true);
    expect(isTruthyString('  true  ')).toBe(true);
  });

  it('returns true for "yes" (case variants)', () => {
    expect(isTruthyString('yes')).toBe(true);
    expect(isTruthyString('YES')).toBe(true);
    expect(isTruthyString('Yes')).toBe(true);
  });

  it('returns true for "on"', () => {
    expect(isTruthyString('on')).toBe(true);
  });

  it('returns true for "enabled"', () => {
    expect(isTruthyString('enabled')).toBe(true);
    expect(isTruthyString('Enabled')).toBe(true);
    expect(isTruthyString('ENABLED')).toBe(true);
  });

  it('returns true for "active"', () => {
    expect(isTruthyString('active')).toBe(true);
  });

  it('returns true for "allow"', () => {
    expect(isTruthyString('allow')).toBe(true);
  });

  it('returns true for "up"', () => {
    expect(isTruthyString('up')).toBe(true);
  });

  it('returns true for "online"', () => {
    expect(isTruthyString('online')).toBe(true);
  });

  it('returns true for "open"', () => {
    expect(isTruthyString('open')).toBe(true);
  });

  it('returns true for "pass"', () => {
    expect(isTruthyString('pass')).toBe(true);
  });

  it('returns true for "ok"', () => {
    expect(isTruthyString('ok')).toBe(true);
  });

  it('returns true for "success"', () => {
    expect(isTruthyString('success')).toBe(true);
  });

  it('returns true for "positive"', () => {
    expect(isTruthyString('positive')).toBe(true);
  });

  it('returns true for "valid"', () => {
    expect(isTruthyString('valid')).toBe(true);
  });

  it('returns true for "accepted"', () => {
    expect(isTruthyString('accepted')).toBe(true);
  });

  it('returns true for "running"', () => {
    expect(isTruthyString('running')).toBe(true);
  });

  it('returns true for "connected"', () => {
    expect(isTruthyString('connected')).toBe(true);
  });

  it('returns true for "available"', () => {
    expect(isTruthyString('available')).toBe(true);
  });

  // --- Falsy representations return false ---
  it('returns false for boolean false', () => {
    expect(isTruthyString(false)).toBe(false);
  });

  it('returns false for number 0', () => {
    expect(isTruthyString(0)).toBe(false);
  });

  it('returns false for "no"', () => {
    expect(isTruthyString('no')).toBe(false);
  });

  it('returns false for "off"', () => {
    expect(isTruthyString('off')).toBe(false);
  });

  it('returns false for "disabled"', () => {
    expect(isTruthyString('disabled')).toBe(false);
  });

  it('returns false for "inactive"', () => {
    expect(isTruthyString('inactive')).toBe(false);
  });

  it('returns false for "deny"', () => {
    expect(isTruthyString('deny')).toBe(false);
  });

  it('returns false for "down"', () => {
    expect(isTruthyString('down')).toBe(false);
  });

  it('returns false for "offline"', () => {
    expect(isTruthyString('offline')).toBe(false);
  });

  it('returns false for "closed"', () => {
    expect(isTruthyString('closed')).toBe(false);
  });

  it('returns false for "fail"', () => {
    expect(isTruthyString('fail')).toBe(false);
  });

  it('returns false for "nok"', () => {
    expect(isTruthyString('nok')).toBe(false);
  });

  it('returns false for "failure"', () => {
    expect(isTruthyString('failure')).toBe(false);
  });

  it('returns false for "negative"', () => {
    expect(isTruthyString('negative')).toBe(false);
  });

  it('returns false for "invalid"', () => {
    expect(isTruthyString('invalid')).toBe(false);
  });

  it('returns false for "rejected"', () => {
    expect(isTruthyString('rejected')).toBe(false);
  });

  it('returns false for "stopped"', () => {
    expect(isTruthyString('stopped')).toBe(false);
  });

  it('returns false for "disconnected"', () => {
    expect(isTruthyString('disconnected')).toBe(false);
  });

  it('returns false for "unavailable"', () => {
    expect(isTruthyString('unavailable')).toBe(false);
  });

  // --- Boxed primitives ---
  it('handles boxed Boolean(true)', () => {
    expect(isTruthyString(new Boolean(true))).toBe(true);
  });

  it('handles boxed Boolean(false)', () => {
    expect(isTruthyString(new Boolean(false))).toBe(false);
  });

  it('handles boxed String("yes")', () => {
    expect(isTruthyString(new String('yes'))).toBe(true);
  });

  it('handles boxed String("no")', () => {
    expect(isTruthyString(new String('no'))).toBe(false);
  });

  it('handles boxed Number(1)', () => {
    expect(isTruthyString(new Number(1))).toBe(true);
  });

  it('handles boxed Number(0)', () => {
    expect(isTruthyString(new Number(0))).toBe(false);
  });

  // --- Unrecognised inputs ---
  it('returns false for null', () => {
    expect(isTruthyString(null)).toBe(false);
  });

  it('returns false for undefined', () => {
    expect(isTruthyString(undefined)).toBe(false);
  });

  it('returns false for empty string', () => {
    expect(isTruthyString('')).toBe(false);
  });

  it('returns false for arbitrary string', () => {
    expect(isTruthyString('maybe')).toBe(false);
  });

  it('returns false for number 123', () => {
    expect(isTruthyString(123)).toBe(false);
  });

  it('returns false for arrays', () => {
    expect(isTruthyString([])).toBe(false);
  });

  it('returns false for plain objects', () => {
    expect(isTruthyString({})).toBe(false);
  });
});

// ---------------------------------------------------------------------------
// isFalseyString
// ---------------------------------------------------------------------------

describe('isFalseyString', () => {
  // --- Falsy representations ---
  it('returns true for boolean false', () => {
    expect(isFalseyString(false)).toBe(true);
  });

  it('returns true for number 0', () => {
    expect(isFalseyString(0)).toBe(true);
  });

  it('returns true for "false" (case variants + whitespace)', () => {
    expect(isFalseyString('false')).toBe(true);
    expect(isFalseyString('FALSE')).toBe(true);
    expect(isFalseyString('False')).toBe(true);
    expect(isFalseyString('  false  ')).toBe(true);
  });

  it('returns true for "f"', () => {
    expect(isFalseyString('f')).toBe(true);
    expect(isFalseyString('F')).toBe(true);
  });

  it('returns true for "0" (string)', () => {
    expect(isFalseyString('0')).toBe(true);
  });

  it('returns true for "no" (case variants)', () => {
    expect(isFalseyString('no')).toBe(true);
    expect(isFalseyString('NO')).toBe(true);
    expect(isFalseyString('No')).toBe(true);
  });

  it('returns true for "n"', () => {
    expect(isFalseyString('n')).toBe(true);
    expect(isFalseyString('N')).toBe(true);
  });

  it('returns true for "off"', () => {
    expect(isFalseyString('off')).toBe(true);
    expect(isFalseyString('OFF')).toBe(true);
  });

  it('returns true for "disabled"', () => {
    expect(isFalseyString('disabled')).toBe(true);
    expect(isFalseyString('DISABLED')).toBe(true);
  });

  it('returns true for "inactive"', () => {
    expect(isFalseyString('inactive')).toBe(true);
  });

  it('returns true for "deny"', () => {
    expect(isFalseyString('deny')).toBe(true);
  });

  it('returns true for "down"', () => {
    expect(isFalseyString('down')).toBe(true);
  });

  it('returns true for "offline"', () => {
    expect(isFalseyString('offline')).toBe(true);
  });

  it('returns true for "closed"', () => {
    expect(isFalseyString('closed')).toBe(true);
  });

  it('returns true for "fail"', () => {
    expect(isFalseyString('fail')).toBe(true);
  });

  it('returns true for "nok"', () => {
    expect(isFalseyString('nok')).toBe(true);
  });

  it('returns true for "failure"', () => {
    expect(isFalseyString('failure')).toBe(true);
  });

  it('returns true for "negative"', () => {
    expect(isFalseyString('negative')).toBe(true);
  });

  it('returns true for "invalid"', () => {
    expect(isFalseyString('invalid')).toBe(true);
  });

  it('returns true for "rejected"', () => {
    expect(isFalseyString('rejected')).toBe(true);
  });

  it('returns true for "stopped"', () => {
    expect(isFalseyString('stopped')).toBe(true);
  });

  it('returns true for "disconnected"', () => {
    expect(isFalseyString('disconnected')).toBe(true);
  });

  it('returns true for "unavailable"', () => {
    expect(isFalseyString('unavailable')).toBe(true);
  });

  // --- Truthy representations return false ---
  it('returns false for boolean true', () => {
    expect(isFalseyString(true)).toBe(false);
  });

  it('returns false for number 1', () => {
    expect(isFalseyString(1)).toBe(false);
  });

  it('returns false for "yes"', () => {
    expect(isFalseyString('yes')).toBe(false);
  });

  it('returns false for "on"', () => {
    expect(isFalseyString('on')).toBe(false);
  });

  it('returns false for "enabled"', () => {
    expect(isFalseyString('enabled')).toBe(false);
  });

  it('returns false for "active"', () => {
    expect(isFalseyString('active')).toBe(false);
  });

  it('returns false for "allow"', () => {
    expect(isFalseyString('allow')).toBe(false);
  });

  it('returns false for "up"', () => {
    expect(isFalseyString('up')).toBe(false);
  });

  it('returns false for "online"', () => {
    expect(isFalseyString('online')).toBe(false);
  });

  it('returns false for "open"', () => {
    expect(isFalseyString('open')).toBe(false);
  });

  it('returns false for "pass"', () => {
    expect(isFalseyString('pass')).toBe(false);
  });

  it('returns false for "ok"', () => {
    expect(isFalseyString('ok')).toBe(false);
  });

  it('returns false for "success"', () => {
    expect(isFalseyString('success')).toBe(false);
  });

  it('returns false for "positive"', () => {
    expect(isFalseyString('positive')).toBe(false);
  });

  it('returns false for "valid"', () => {
    expect(isFalseyString('valid')).toBe(false);
  });

  it('returns false for "accepted"', () => {
    expect(isFalseyString('accepted')).toBe(false);
  });

  it('returns false for "running"', () => {
    expect(isFalseyString('running')).toBe(false);
  });

  it('returns false for "connected"', () => {
    expect(isFalseyString('connected')).toBe(false);
  });

  it('returns false for "available"', () => {
    expect(isFalseyString('available')).toBe(false);
  });

  // --- Boxed primitives ---
  it('handles boxed Boolean(true)', () => {
    expect(isFalseyString(new Boolean(true))).toBe(false);
  });

  it('handles boxed Boolean(false)', () => {
    expect(isFalseyString(new Boolean(false))).toBe(true);
  });

  it('handles boxed String("no")', () => {
    expect(isFalseyString(new String('no'))).toBe(true);
  });

  it('handles boxed String("yes")', () => {
    expect(isFalseyString(new String('yes'))).toBe(false);
  });

  it('handles boxed Number(0)', () => {
    expect(isFalseyString(new Number(0))).toBe(true);
  });

  it('handles boxed Number(1)', () => {
    expect(isFalseyString(new Number(1))).toBe(false);
  });

  it('handles boxed Number(2)', () => {
    expect(isFalseyString(new Number(2))).toBe(false);
  });

  // --- Unrecognised inputs ---
  it('returns false for null', () => {
    expect(isFalseyString(null)).toBe(false);
  });

  it('returns false for undefined', () => {
    expect(isFalseyString(undefined)).toBe(false);
  });

  it('returns false for empty string', () => {
    expect(isFalseyString('')).toBe(false);
  });

  it('returns false for arbitrary string', () => {
    expect(isFalseyString('maybe')).toBe(false);
  });

  it('returns false for number 123', () => {
    expect(isFalseyString(123)).toBe(false);
  });

  it('returns false for arrays', () => {
    expect(isFalseyString([])).toBe(false);
  });

  it('returns false for plain objects', () => {
    expect(isFalseyString({})).toBe(false);
  });
});
