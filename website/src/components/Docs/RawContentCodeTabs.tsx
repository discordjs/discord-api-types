import CodeBlock from '@theme/CodeBlock';
import TabItem from '@theme/TabItem';
import Tabs from '@theme/Tabs';
import type { FC } from 'react';
import React from 'react';

interface CodeblockProps {
	readonly content: string;
	readonly title?: string;
}

interface Props {
	readonly esmCodeblockProps: CodeblockProps;
	readonly jsCodeblockProps: CodeblockProps;
	readonly tsCodeblockProps: CodeblockProps;
}

const RawContentCodeTabs: FC<Props> = ({ esmCodeblockProps, jsCodeblockProps, tsCodeblockProps }) => (
	<Tabs groupId="language-choice">
		<TabItem default label="JavaScript" value="javascript">
			<CodeBlock className="javascript">{jsCodeblockProps.content}</CodeBlock>
		</TabItem>
		<TabItem label="ESM" value="ESM">
			<CodeBlock className="javascript">{esmCodeblockProps.content}</CodeBlock>
		</TabItem>
		<TabItem label="TypeScript" value="typescript">
			<CodeBlock className="typescript">{tsCodeblockProps.content}</CodeBlock>
		</TabItem>
	</Tabs>
);

export default RawContentCodeTabs;
