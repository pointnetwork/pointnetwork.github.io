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
            "build/build-upgradable-zapps",
            "build/build-point-deploy-json-file-explained",
            "build/build-routes-json-file-explained",
            "build/build-using-hardhat-console",
            "build/build-file-upload-cli",
            "build/build-test-visitor-node-using-different-identity",
            "build/build-import-data-from-live-dapps-into-dev",
            "build/build-start-point-node-default",
            "build/build-delegating-deployer-identities",
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
  ],
};