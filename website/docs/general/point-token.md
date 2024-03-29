---
id: point-token
title: Point Token
sidebar_label: Point Token
slug: ../point-token
---
# POINT Token

The name of the native token used in Point Network is POINT (all capital letters). It is used as fees for transactions, and to pay for services to service providers on the network.

## Denominations

The smallest unit of account for POINT is `wei`.

| Unit       | Wei value                                | POINT value                     |
| ---------- | ---------------------------------------- | ------------------------------- |
| wei        | 1 wei                                    | 0.000 000 000 000 000 001 POINT |
| Kwei       | 1,000 wei (1e3 wei)                      | 0.000 000 000 000 001 POINT     |
| Mwei       | 1,000,000 wei (1e6 wei)                  | 0.000 000 000 001 POINT         |
| Gwei       | 1,000,000,000 wei (1e9 wei)              | 0.000 000 001 POINT             |
| microPOINT | 1,000,000,000,000 wei (1e12 wei)         | 0.000 001 POINT                 |
| milliPOINT | 1,000,000,000,000,000 wei (1e15 wei)     | 0.001 POINT                     |
| POINT      | 1,000,000,000,000,000,000 wei (1e18 wei) | 1 POINT                         |
| KiloPOINT  | 1e21 wei                                 | 1,000 POINT                     |
| MegaPOINT  | 1e24 wei                                 | 1,000,000 POINT                 |

Because users might easily confuse `micro` and `milli`, and especially as the POINT price fluctuates and they might start using different denominations as the default for payments, it's advised not to use `milliPOINT` in any user interfaces, and always default to `microPOINT` amounts, if `POINT` is too big of a unit.
