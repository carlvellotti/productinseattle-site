import assert from "node:assert/strict";
import test from "node:test";
import { events, getUpcomingEvents } from "../data/events.ts";

test("September roundup stays intact alongside later months", () => {
  const upcoming = getUpcomingEvents(undefined, new Date("2026-09-12T16:00:00Z"));
  const september = upcoming.filter(event => event.date.startsWith("2026-09"));
  assert.equal(september.length, 11);
  assert.equal(september.filter(event => event.featured).length, 2);
  assert.ok(upcoming.every(event => event.date >= "2026-09-12"));
});

test("October replaces September in upcoming listings", () => {
  const upcoming = getUpcomingEvents(undefined, new Date("2026-10-06T19:00:00Z"));
  assert.equal(upcoming.length, 13);
  assert.ok(upcoming.every(event => event.date.startsWith("2026-10")));
  assert.equal(upcoming.filter(event => event.featured).length, 0);
  assert.equal(new Set(upcoming.map(event => event.url)).size, 13);
});

test("event ids are unique", () => {
  assert.equal(new Set(events.map(event => event.id)).size, events.length);
});

test("summer events expire at Seattle midnight, not UTC midnight", () => {
  const id = "claude-builders-bellevue-sep-2026";
  assert.ok(getUpcomingEvents(undefined, new Date("2026-09-13T06:59:59Z")).some(e => e.id === id));
  assert.ok(!getUpcomingEvents(undefined, new Date("2026-09-13T07:00:00Z")).some(e => e.id === id));
});

test("winter dates use Pacific standard time", () => {
  const id = "healthtech-happy-hour-feb-2026";
  assert.ok(getUpcomingEvents(undefined, new Date("2026-02-05T07:59:59Z")).some(e => e.id === id));
  assert.ok(!getUpcomingEvents(undefined, new Date("2026-02-05T08:00:00Z")).some(e => e.id === id));
});

test("after the roundup expires there are no stale upcoming events", () => {
  assert.deepEqual(getUpcomingEvents(undefined, new Date("2026-10-31T12:00:00Z")), []);
});
