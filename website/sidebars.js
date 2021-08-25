module.exports = {
  pnSidebar: [
    {
      type: 'category',
      label: 'General',
      items: [
        'general/getting-started',
        'general/run-demo-docker',
        'general/run-dev-docker',
        'general/troubleshooting',
        'general/debugging',
        'general/point-token'
      ],
    },
    {
      type: "category",
      label: "Learn",
      items: [
        {
          type: "category",
          label: "Basics",
          items: [
            'learn/learn-architecture',
            'learn/learn-storage-layer',
            'learn/learn-point-deployer',
            'learn/learn-websockets',
            'learn/learn-filecoin-vs-pointnetwork'
          ]
        },
        {
          type: "category",
          label: "Advanced",
          items: [
            'learn/learn-l2-payments'
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
            "build/build-build-with-point-network",
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
    }
  ],
};