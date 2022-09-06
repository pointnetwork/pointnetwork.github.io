module.exports = {
  pnSidebar: [
    {
      type: 'category',
      label: 'General',
      items: [
        'general/getting-started',
        'general/pointnetwork-demo',
        'general/troubleshooting',
        'general/debugging',
        'general/contributing',
        'general/point-token'
      ],
    },
    {
      type: "category",
      label: "Learn",
      items: [
        "learn/learn-index",
        {
          type: "category",
          label: "Basics",
          items: [
            'learn/learn-architecture',
            'learn/learn-storage-layer',
            'learn/learn-point-deployer',
            'learn/learn-websockets',
            'learn/learn-filecoin-vs-pointstorage'
          ]
        },
        {
          type: "category",
          label: "Advanced",
          items: [
            'learn/learn-layer2-payments'
          ]
        },
        {
          type: "category",
          label: "Cryptography",
          items: [
            'learn/learn-cryptography'
          ]
        },
        'learn/learn-video-tutorials'
      ]
    },
    {
      type: 'category',
      label: 'Build',
      items: [
        "build/build-index",
        {
          type: "category",
          label: "Development Guide",
          items: [
            'build/build-environments',
            "build/build-zapp-dev-environment-docker",
            "build/build-zapp-dev-environment-direct-install",
            "build/build-create-a-dev-point-network-profile-in-firefox",
            "build/build-zapp-developer-guide",
            "build/build-deploy-zapp",
            "build/build-upgradable-zapps",
            "build/build-point-deploy-json-file-explained",
            "build/build-routes-json-file-explained",
            "build/build-using-hardhat-console",
            "build/build-file-upload-cli",
            "build/build-test-visitor-node-using-different-identity",
            "build/build-import-data-from-live-dapps-into-dev",
            "build/build-start-point-node-default",
            "build/build-delegating-deployer-identities",
            "build/build-use-identity-oracle-in-devlocal",
            "build/build-upgrade-identity-contract",
            "build/build-testing-guide"
          ],
        },
        {
          type: "category",
          label: "Integration Guide",
          items: [
            "build/build-integration",
          ],
        }
      ],
    },
    {
      type: 'category',
      label: 'Maintain',
      items: [
        'maintain/maintain-index',
        {
          type: "category",
          label: "Nodes",
          items: [
            "maintain/maintain-setup-node",
          ],
        }
      ]
    },
    {
      type: 'category',
      label: 'Use',
      items: [
        "use/use-index",
      ],
    },
    {
      type: 'category',
      label: 'Point Chain',
      items: [
        {
          type: 'category',
          label: 'About Point Chain',
          items: [
            {
              type: "category",
              label: "High-Level Overview",
              items: [
                "point_chain/about/intro/overview",
                "point_chain/about/intro/resources",
              ],
            },
          ],
        },
        {
          type: "category",
          label: "Users",
          items: [
            {
              type: "category",
              label: "Basic Concepts",
              items: [
                "point_chain/users/basics/transactions",
                "point_chain/users/basics/tokens",
                "point_chain/users/basics/gas",
              ],
            },
            {
              type: "category",
              label: "Digital Wallet",
              items: [
                "point_chain/users/wallets/metamask",
                "point_chain/users/wallets/backup",
                "point_chain/users/wallets/keplr",
                "point_chain/users/wallets/ledger",
              ],
            },
            {
              type: "category",
              label: "Account Keys",
              items: [
                "point_chain/users/keys/keyring",
                "point_chain/users/keys/multisig",
              ],
            },
            {
              type: "category",
              label: "Technical Concepts",
              items: [
                "point_chain/users/technical_concepts/architecture",
                "point_chain/users/technical_concepts/accounts",
                "point_chain/users/technical_concepts/chain_id",
                "point_chain/users/technical_concepts/encoding",
                "point_chain/users/technical_concepts/pending_state",
              ],
            },
          ],
        },
        {
          type: "category",
          label: "Validators",
          items: [
            "point_chain/validators/overview",
            {
              type: "category",
              label: "Installation and quick start",
              items: [
                "point_chain/validators/quickstart/installation",
                "point_chain/validators/quickstart/run_node",
              ],
            },
            {
              type: "category",
              label: "Setup and Configuration",
              items: [
                "point_chain/validators/setup/run_validator",
                "point_chain/validators/setup/disk_optimization",
                "point_chain/validators/setup/configuration",
              ],
            },
            "point_chain/validators/mainnet",
            "point_chain/validators/testnet",
            {
              type: "category",
              label: "Security",
              items: [
                "point_chain/validators/security/security",
                "point_chain/validators/security/kms",
                "point_chain/validators/security/kms_ledger",
                "point_chain/validators/security/checklist",
                "point_chain/validators/security/backup",
              ],
            },
            {
              type: "category",
              label: "Software Upgrade Guide",
              items: [
                "point_chain/validators/upgrades/overview",
                "point_chain/validators/upgrades/upgrades",
                "point_chain/validators/upgrades/rollback",
                "point_chain/validators/upgrades/manual",
                "point_chain/validators/upgrades/automated",
              ],
            },
            "point_chain/validators/faq",
          ],
        },
        {
          type: "category",
          label: "Block Explorers",
          items: [
            "point_chain/developers/explorers",
          ],
        },
      ],
    },
  ],
};